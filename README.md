This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Assumptions made during development:

## List of features:

## Key Features

1. **File Upload**:
   - Drag-and-drop functionality for PDF files.
   - Manual file upload option.
   - Displays file size limit ("Limit 25 MB per file").
   - Files stored locally in the browser's local storage.

2. **Local Storage Implementation**:
   - Uploaded files and their metadata are saved locally.
   - Persistent data across page reloads.
   - Efficient retrieval of stored files and metadata.

3. **Coursework Details Form**:
   - Dropdowns for selecting "Coursework Type" and "Subject".
   - Text input for the essay title.
   - Form data is stored locally along with the associated file.

4. **Evaluation Display**:
   - Dummy data is used for evaluation purposes.
   - Shows overall score with a circular progress indicator.
   - Breakdown of scores by criteria (A, B, C).
   - Evaluation date displayed.
   - Evaluation results are stored and retrieved locally.

5. **Coursework List**:
   - Displays previously uploaded coursework from local storage.
   - Shows relevant details such as title, subject, word count, etc.

   ## Bonus Features

   