"use client"

export function CalendarForm() {

    const date = new Date(2025, 0, 20); // Month is 0-based (0 = Jan)
    const format = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    
    

    const formattedDate = `Today, ${format}`;

  return (
    <button
    className="inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-[10px] sm:text-xs ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-3 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-2 w-auto max-w-[160px] pl-2 text-left font-normal text-muted-foreground  md:ml-auto md:mr-0 mr-0"
    id=":r3f:-form-item"
    aria-describedby=":r3f:-form-item-description"
    aria-invalid="false"
    type="button"
    aria-haspopup="dialog"
    aria-expanded="false"
    aria-controls="radix-:r3g:"
    data-state="closed"
  >
    <span>{formattedDate}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-calendar ml-auto h-3 w-3 opacity-50"
    >
      <path d="M8 2v4"></path>
      <path d="M16 2v4"></path>
      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
      <path d="M3 10h18"></path>
    </svg>
  </button>
  
  

  )
}
