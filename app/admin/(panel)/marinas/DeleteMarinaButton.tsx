"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";

interface DeleteMarinaButtonProps {
  marinaId: string;
  marinaName: string;
}

export default function DeleteMarinaButton({
  marinaId,
  marinaName,
}: DeleteMarinaButtonProps) {
  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      `"${marinaName}" kaydını silmek istediğinizden emin misiniz?`
    );

    if (!confirmed) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `/api/admin/marinas/${marinaId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(
          data.error ??
            "Marina silinemedi."
        );

        return;
      }

      router.refresh();
    } catch {
      alert(
        "Marina silinirken bir bağlantı hatası oluştu."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className="
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        border-red-200
        px-3
        py-2
        text-sm
        font-semibold
        text-red-600
        transition
        hover:bg-red-50
        disabled:cursor-not-allowed
        disabled:opacity-50
      "
    >
      <Trash2 size={15} />

      {loading
        ? "Siliniyor..."
        : "Sil"}
    </button>
  );
}