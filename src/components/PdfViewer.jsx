import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Document, Page } from 'react-pdf'; // Import react-pdf components

export default function PdfViewer() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-100 dark:bg-gray-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <ChevronLeftIcon className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <ChevronRightIcon className="h-5 w-5" />
          </Button>
          <Separator className="h-6" orientation="vertical" />
          <Button size="icon" variant="ghost">
            <ZoomInIcon className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <ZoomOutIcon className="h-5 w-5" />
          </Button>
        </div>
        <Button size="icon" variant="ghost">
          <DownloadIcon className="h-5 w-5" />
          <span className="sr-only">Download</span>
        </Button>
      </header>
      <div className="flex-1 overflow-auto">
        <Document file="../assets/resume.pdf">
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  )
}

// The rest of your icon components...
function ChevronLeftIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    )
  }
  
  
  function ChevronRightIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    )
  }
  
  
  function DownloadIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    )
  }
  
  
  function ZoomInIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
        <line x1="11" x2="11" y1="8" y2="14" />
        <line x1="8" x2="14" y1="11" y2="11" />
      </svg>
    )
  }
  
  
  function ZoomOutIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" x2="16.65" y1="21" y2="16.65" />
        <line x1="8" x2="14" y1="11" y2="11" />
      </svg>
    )
  }