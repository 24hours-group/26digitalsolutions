const defaultInsights = [
  {
    id: 1,
    category: 'Attribution',
    date: 'April 2026',
    title: 'Why click-based attribution is failing — and what to replace it with.',
    metricValue: '26%',
    metricLabel: 'ATTRIBUTION 2.0',
    svgType: 'attribution',
  },
  {
    id: 2,
    category: 'Creative',
    date: 'March 2026',
    title: 'The creative testing framework that took our clients from 0.4% to 2.1% CTR.',
    metricValue: '5×',
    metricLabel: 'CREATIVE PERFORMANCE',
    svgType: 'creative',
  },
  {
    id: 3,
    category: 'Pipeline',
    date: 'February 2026',
    title: 'Replacing MQLs with sales-accepted opportunities: a 90-day playbook.',
    metricValue: '8.2×',
    metricLabel: 'PIPELINE INTELLIGENCE',
    svgType: 'pipeline',
  },
];

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  return res.status(200).json(defaultInsights);
}
