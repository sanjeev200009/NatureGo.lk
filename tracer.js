
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');

const provider = new NodeTracerProvider();

const exporter = new JaegerExporter({
    endpoint: 'http://localhost:14268/api/traces',
    serviceName: 'your-service-name', // Change this to match your service
});

provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
provider.register();

registerInstrumentations({
    tracerProvider: provider,
    instrumentations: [new HttpInstrumentation()],
});
