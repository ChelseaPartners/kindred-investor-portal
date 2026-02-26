"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, FileSpreadsheet, FileText, X, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface UploadedFile {
  file: File;
  status: "pending" | "uploading" | "success" | "error";
  message?: string;
}

export function UploadDropzone() {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      status: "pending" as const,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "application/vnd.ms-excel": [".xls"],
      "application/pdf": [".pdf"],
      "text/csv": [".csv"],
    },
  });

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (name: string) => {
    if (name.endsWith(".pdf")) return FileText;
    return FileSpreadsheet;
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={cn(
          "cursor-pointer rounded-xl border-2 border-dashed p-12 text-center transition-colors",
          isDragActive
            ? "border-[#c9a96e] bg-[#c9a96e]/5"
            : "border-gray-300 hover:border-gray-400"
        )}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-4 text-sm font-medium text-gray-900">
          {isDragActive ? "Drop files here..." : "Drag & drop files here"}
        </p>
        <p className="mt-1 text-sm text-gray-500">
          or click to browse. Supports Excel (.xlsx, .xls), PDF, and CSV files.
        </p>
      </div>

      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((item, index) => {
            const Icon = getFileIcon(item.file.name);
            return (
              <Card key={index} className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                  <Icon className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.file.name}</p>
                    <p className="text-xs text-gray-500">
                      {(item.file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {item.status === "pending" && (
                    <span className="text-xs text-gray-500">Ready</span>
                  )}
                  {item.status === "uploading" && (
                    <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                  )}
                  {item.status === "success" && (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  )}
                  {item.status === "error" && (
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  )}
                  <button
                    onClick={() => removeFile(index)}
                    className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </Card>
            );
          })}
          <div className="flex justify-end pt-2">
            <Button>Upload All Files</Button>
          </div>
        </div>
      )}
    </div>
  );
}
