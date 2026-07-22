import type { Options } from 'k6/options';
import { runPublicPostsFlow } from '../../helpers/utils.ts';

export const options: Options = {
    stages: [
        { duration: '20s', target: 30 },
        { duration: '30s', target: 30 },
        { duration: '20s', target: 50 },
        { duration: '30s', target: 50 },
        { duration: '20s', target: 100 },
        { duration: '30s', target: 100 },
       { duration: '30s', target: 0 },
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
  return {
    "reports/stress-summary.json": JSON.stringify(data),
  };
}