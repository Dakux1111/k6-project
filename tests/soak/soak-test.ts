import type { Options } from 'k6/options';
import { runPublicPostsFlow } from '../../helpers/utils.ts';

export const options: Options = {
    stages: [
        { duration: '20s', target: 30 },
        { duration: '100s', target: 30 },
        { duration: '20s', target: 0 },
    ],
    thresholds: {
        http_req_duration: ['p(95)<1500'],
        http_req_failed: ['rate<0.02'],
    },
};

export default function (): void {
    runPublicPostsFlow();
}

export function handleSummary(data) {
  return {
    "reports/soak-summary.json": JSON.stringify(data),
  };
}