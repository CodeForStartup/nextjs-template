"use client"

import React from "react"
import Link from "next/link"

import { Eye, Menu, Trash } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Typography from "@/molecules/typography"

import { TagItemProps } from "./columns"

type Props = { tag: TagItemProps }

const GridView = ({ tag }: Props) => {
  return (
    <Card className="sm:col-span-1">
      <CardHeader>
        <div className="flex flex-row items-center justify-between">
          <div className="w-6" />
          <Avatar className="h-14 w-14">
            <AvatarImage
              src={tag?.image || ""}
              alt={tag?.name}
            />
            <AvatarFallback>{"CO".slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="">
            <Popover>
              <PopoverTrigger>
                <Menu />
              </PopoverTrigger>
              <PopoverContent className="h-50 w-50">
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <Eye className="mr-3 h-5 w-5" />
                    <Link
                      href={`/tags/${tag?.id}`}
                      key={tag?.id}
                    >
                      Show
                    </Link>
                  </div>
                  <div className="mt-2 flex flex-row items-center">
                    <Trash className="mr-3 h-5 w-5 text-red-500" />
                    <div>Delete</div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        {tag?.name && (
          <Typography
            variant="p"
            className="text-gray-500"
          >
            {tag?.name}
          </Typography>
        )}
        {tag?.description && (
          <Typography
            variant="p"
            className="text-gray-500"
          >
            {tag?.description}
          </Typography>
        )}
        <Typography
          variant="p"
          className="text-gray-500"
        >
          {tag?._count?.select?.tagOnPost}
        </Typography>
        {tag?.status === "active" && <Badge>{tag?.status}</Badge>}
        {tag?.status !== "active" && <Badge variant="secondary">{tag?.status}</Badge>}
      </CardContent>
    </Card>
  )
}

export default GridView
