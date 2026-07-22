import type { Options } from 'k6/options';
import { runPublicPostsFlow } from '../../helpers/utils.ts';

export const options: Options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '10s', target: 10 },
        { duration: '10s', target: 300 },
        { duration: '10s', target: 300 },
        { duration: '10s', target: 10 },
        { duration: '10s', target: 10 },
       { duration: '10s', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(95)<3000'],
        http_req_failed: ['rate<0.10'],
    },
};

export default function (): void {
    runPublicPostsFlow();
}

export function handleSummary(data) {
      console.log("🚀 Ejecutando handleSummary");
  return {
    
    "reports/spike-summary.json": JSON.stringify(data),
  };
}