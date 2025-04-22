
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface EcoImpactBadgeProps {
  score: 'high' | 'medium' | 'low';
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function EcoImpactBadge({ score, showLabel = true, size = 'md' }: EcoImpactBadgeProps) {
  const scoreDetails = {
    high: {
      color: 'bg-eco-impact-high',
      label: 'High Eco Impact',
      description: 'Sustainable practices prioritized with minimal environmental impact'
    },
    medium: {
      color: 'bg-eco-impact-medium',
      label: 'Medium Eco Impact',
      description: 'Balances tourism with some environmental considerations'
    },
    low: {
      color: 'bg-eco-impact-low',
      label: 'Low Eco Impact',
      description: 'Environmental impact concerns require visitor attention'
    }
  };

  const sizeClasses = {
    sm: 'text-xs py-0.5 px-2',
    md: 'text-sm py-1 px-2.5',
    lg: 'text-base py-1.5 px-3'
  };

  const { color, label, description } = scoreDetails[score];

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div 
            className={`inline-flex items-center rounded-full ${color} text-white font-medium ${sizeClasses[size]}`}
          >
            {showLabel ? label : score.charAt(0).toUpperCase() + score.slice(1)}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
