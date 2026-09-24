const projects = [
    {
        title: "Agentic AI–Powered Telecom KPI Intelligence Platform",
        description: "Cross-functional teams needed fast, reliable answers to complex KPI questions and spent significant effort building executive reports by hand.",
        highlights: [
            "Architected and shipped an agentic GenAI application that answers complex business KPI queries and automates executive deliverables (PDF reports, PPT presentations), taking it from local prototype to cloud production deployment.",
            "Designed a Retrieval-Augmented Generation (RAG) pipeline using LangChain, vector embeddings and a vector database to retrieve and synthesize insights from large volumes of historical operational data.",
            "Orchestrated multi-agent workflows that combine the LLM with live KPI feeds and ML model outputs (Random Forest / XGBoost predictions and time-series forecasts) for root-cause analysis and trend forecasting.",
            "Applied prompt engineering, chunking and context optimization to improve answer relevance and grounding in source data.",
            "Prototyped on internal enterprise AI infrastructure (Eric AI) with locally hosted Qwen models (Ollama), keeping data private and avoiding per-token API cost, with early governance and responsible-AI controls.",
            "Deployed to production on Google Cloud Vertex AI as a containerized, serverless service on Cloud Run for scalable, pay-per-use hosting.",
            "Integrated the agent directly with the PMGCP data pipeline on GCP to fetch operational KPI data at source, removing manual data extracts."
        ],
        techStack: ["OpenAI GPT", "Google Gemini", "Qwen", "Ollama", "LangChain", "RAG", "Vector DB", "Multi-Agent Orchestration", "Google Vertex AI", "Cloud Run", "Docker", "PMGCP Pipeline", "Python", "SQL", "Power BI", "PPT/PDF automation"],
        outcome: "Production agentic assistant on Google Cloud delivering grounded KPI answers and automated executive-ready presentations, summaries, dashboards and PDF exports, significantly reducing manual analyst effort."
    },
    {
        title: "HR & Finance Analytics Suite",
        description: "HR and Finance reporting was fragmented across spreadsheets, with no single trusted view for leadership.",
        highlights: [
            "Designed and delivered an end-to-end Power BI analytics suite unifying HR and Finance data into a single source of truth for leadership.",
            "Engineered a star-schema data model integrating HR (headcount, hiring, attrition, tenure) and Finance (budget, actuals, cost centers, operating expenses) data, with conformed date, department and cost-center dimensions.",
            "Built ETL and transformation logic in Power Query and SQL to cleanse, standardize and merge multi-source extracts, with reconciliation checks against source systems.",
            "Developed advanced DAX measures: attrition rate, time-to-hire, cost per employee, budget vs. actual variance, YoY/MoM trends and rolling forecasts.",
            "Implemented row-level security to protect sensitive employee and salary data by department and cost center.",
            "Created interactive executive dashboards with drill-through, bookmarks and what-if analysis."
        ],
        techStack: ["Power BI", "DAX", "Power Query", "SQL", "Star-Schema Data Modeling", "Row-Level Security"],
        outcome: "Automated scheduled refresh and standardized KPI definitions, eliminating recurring manual month-end reporting and improving trust in the numbers."
    },
    {
        title: "ETL-Driven Inventory Analysis",
        description: "Inventory data from multiple sources had to be consolidated manually, delaying daily reporting.",
        highlights: [
            "Built a Python-based ETL pipeline integrated with Excel Power Query to process inventory data from multiple sources.",
            "Added automated data quality checks and incremental refresh."
        ],
        techStack: ["Python", "Pandas", "Excel Power Query", "SQL"],
        outcome: "Reduced report delivery time from 1 day to ~30 minutes."
    }
];

export default projects;
