#!/usr/bin/env node

/**
 * 🚀 NatureGo.lk Deployment Verification Script
 * 
 * This script verifies that both frontend and backend are properly configured for deployment.
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

const log = {
  success: (msg) => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.blue}ℹ️  ${msg}${colors.reset}`),
  title: (msg) => console.log(`\n${colors.bold}${colors.blue}🔍 ${msg}${colors.reset}\n`)
};

function checkFile(filePath, description) {
  if (fs.existsSync(filePath)) {
    log.success(`${description} exists`);
    return true;
  } else {
    log.error(`${description} missing: ${filePath}`);
    return false;
  }
}

function checkEnvFile(filePath, requiredVars) {
  if (!fs.existsSync(filePath)) {
    log.error(`Environment file missing: ${filePath}`);
    return false;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  let allFound = true;

  requiredVars.forEach(varName => {
    if (content.includes(`${varName}=`)) {
      log.success(`${varName} configured in ${path.basename(filePath)}`);
    } else {
      log.error(`${varName} missing in ${path.basename(filePath)}`);
      allFound = false;
    }
  });

  return allFound;
}

function runCommand(command, description) {
  try {
    execSync(command, { stdio: 'pipe' });
    log.success(description);
    return true;
  } catch (error) {
    log.error(`${description} failed: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log(`${colors.bold}${colors.blue}🌱 NatureGo.lk Deployment Verification${colors.reset}\n`);

  let allChecksPass = true;

  // Check project structure
  log.title('Project Structure');
  
  const criticalFiles = [
    ['package.json', 'Root package.json'],
    ['vite.config.ts', 'Vite configuration'],
    ['src/main.tsx', 'Frontend entry point'],
    ['backend/package.json', 'Backend package.json'],
    ['backend/src/server.js', 'Backend server'],
    ['.github/workflows/gh-pages.yml', 'GitHub Actions workflow']
  ];

  criticalFiles.forEach(([file, desc]) => {
    if (!checkFile(file, desc)) allChecksPass = false;
  });

  // Check environment configuration
  log.title('Environment Configuration');
  
  const frontendEnvVars = ['VITE_API_URL'];
  const backendEnvVars = ['NODE_ENV', 'MONGODB_URI', 'JWT_SECRET'];

  if (!checkEnvFile('.env', frontendEnvVars)) allChecksPass = false;
  if (!checkEnvFile('backend/.env', backendEnvVars)) allChecksPass = false;

  // Check dependencies
  log.title('Dependencies');
  
  if (!runCommand('npm list --depth=0', 'Frontend dependencies check')) allChecksPass = false;
  if (!runCommand('cd backend && npm list --depth=0', 'Backend dependencies check')) allChecksPass = false;

  // Check build process
  log.title('Build Process');
  
  if (!runCommand('npm run build', 'Frontend build')) allChecksPass = false;

  // Check GitHub Pages configuration
  log.title('GitHub Pages Configuration');
  
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    if (packageJson.homepage && packageJson.homepage.includes('github.io')) {
      log.success('Homepage URL configured for GitHub Pages');
    } else {
      log.warning('Homepage URL not configured for GitHub Pages');
    }
  } catch (error) {
    log.error('Failed to read package.json');
    allChecksPass = false;
  }

  // Final result
  console.log('\n' + '='.repeat(60));
  
  if (allChecksPass) {
    console.log(`${colors.bold}${colors.green}🎉 All checks passed! Your project is ready for deployment.${colors.reset}`);
    console.log(`\n${colors.blue}Next steps:${colors.reset}`);
    console.log('1. Push to GitHub to trigger automatic deployment');
    console.log('2. Deploy backend to Railway/Render/Vercel');
    console.log('3. Update VITE_API_URL with production backend URL');
  } else {
    console.log(`${colors.bold}${colors.red}🚨 Some checks failed. Please fix the issues above before deploying.${colors.reset}`);
    process.exit(1);
  }
}

main().catch(console.error);