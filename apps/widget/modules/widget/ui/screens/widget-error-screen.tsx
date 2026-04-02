"use client";

import { useAtomValue } from "jotai";
import { AlertTriangleIcon } from "lucide-react";
import { errorMessageAtom } from "../../atoms/widget-atoms";
import { WidgetHeader } from "../components/widget-header";

export const WidgetErrorScreen = () => {
  const errorMessage = useAtomValue(errorMessageAtom);

  return (
    <>
      <WidgetHeader>
        <div className="flex flex-col justify-between gap-y-1 px-2 py-4">
          <p className="font-bold text-3xl">Hello There!</p>
          <p className="font-medium text-lg italic">
            How can we assist you today?
          </p>
        </div>
      </WidgetHeader>
      <div className="flex flex-1 flex-col items-center justify-center text-muted-foreground gap-y-4 p-4">
        <AlertTriangleIcon />
        <p className="text-sm">{errorMessage || "Invalid Configuration"}</p>
      </div>
    </>
  );
};
