import { memo } from "react"
import { Document, Page, pdfjs } from "react-pdf";
import { useCourseStore } from "../store";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();
const EvaluationContainer = () =>{
    
    return <>
    
    </>
}

export default memo(EvaluationContainer)
