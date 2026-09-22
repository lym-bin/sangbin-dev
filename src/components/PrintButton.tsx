"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden text-sm font-medium underline underline-offset-4"
    >
      PDF로 저장
    </button>
  );
}
