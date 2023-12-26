"use client"

import React from "react"
import { useSearchParams } from "next/navigation"

import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface TagPaginationProps {
  totalPages: number
}

const generatePaginationPath = (page: number, searchParams: URLSearchParams) => {
  searchParams.set("page", String(page))
  return `/tags?${searchParams.toString()}`
}

const TagPagination: React.FC<TagPaginationProps> = ({ totalPages }) => {
  const searchParams = useSearchParams()
  const currentSearchParams = new URLSearchParams(Array.from(searchParams.entries()))

  const currentPage = Number(searchParams.get("page")) || 1

  if (totalPages <= 1) {
    return null
  }

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationPrevious
          href={
            Number(currentPage) > 1
              ? generatePaginationPath(currentPage - 1, currentSearchParams)
              : "#"
          }
          isActive={currentPage > 1}
        />
        {Array.from({ length: totalPages }, (_, i) => (
          <PaginationLink
            key={i}
            href={generatePaginationPath(i + 1, currentSearchParams)}
            isActive={i + 1 === Number(currentPage)}
          >
            {i + 1}
          </PaginationLink>
        ))}
        <PaginationNext
          href={
            Number(currentPage) < totalPages
              ? generatePaginationPath(currentPage + 1, currentSearchParams)
              : "#"
          }
          isActive={Number(currentPage) < totalPages}
        />
      </PaginationContent>
    </Pagination>
  )
}

export default TagPagination
