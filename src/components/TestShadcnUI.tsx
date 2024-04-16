import { Button } from "@/components/ui/button";
import { DropdownMenuDemo } from "@/components/shadcn-ui/DropdownMenuDemo";
import { CardWithForm } from "@/components/shadcn-ui/CardWithForm";
import { SelectDemo } from "@/components/shadcn-ui/SelectDemo";
import { TableDemo } from "@/components/shadcn-ui/TableDemo";
import { ToastDemo } from "@/components/shadcn-ui/ToastDemo";
import { AccordionDemo } from "@/components/shadcn-ui/Accordion";
import { AvatarDemo } from "@/components/shadcn-ui/AvatarDemo";
import { BreadcrumbDemo } from "@/components/shadcn-ui/BreadcrumbDemo";
import { ChevronRight, Loader2, Mail } from "lucide-react";
import Link from "next/link";
import { CalendarForm } from "@/components/shadcn-ui/CalendarForm";
import { DialogDemo } from "@/components/shadcn-ui/DialogDemo";
import { HoverCardDemo } from "@/components/shadcn-ui/HoverCardDemo";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { MenubarDemo } from "@/components/shadcn-ui/MenubarDemo";
import { NavigationMenuDemo } from "@/components/shadcn-ui/NavigationMenuDemo";
import { SheetSide } from "@/components/shadcn-ui/SheetSide";
import { SkeletonDemo } from "@/components/shadcn-ui/SkeletonDemo";
import { TabsDemo } from "@/components/shadcn-ui/TabsDemo";
import { TooltipDemo } from "@/components/shadcn-ui/TooltipDemo";

export default function TestShadcnUI() {
  return (
    <div className="app">
      <h1 className="py-5 uppercase">Test Shadcn UI</h1>
      <h3>Các loại button</h3>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
      <Button>button shadcn-ui</Button>
      <h3>Dropdown Menu:menu khi đúp chuột</h3>
      <DropdownMenuDemo />
      <h3>CardWithForm</h3>
      <CardWithForm />
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>
      <h3>Select</h3>
      <SelectDemo />
      <h3>Table</h3>
      <TableDemo />
      {/* thêm ở layout nữa <Toaster/>*/}
      <h3>Toast:hiển thị cảnh báo</h3>
      <ToastDemo />
      <h3>Accordion:chọn nội dung của từng tiêu đề</h3>
      <AccordionDemo />
      <h3>Avatar</h3>
      <AvatarDemo />
      <h3>Breadcrumb:tạo tiêu đề đường dẫn</h3>
      <BreadcrumbDemo />
      <h3>CalendarForm:form chọn lịch</h3>
      <CalendarForm />
      <h3>Dialog:giống như modal</h3>
      <DialogDemo />
      <h3>HoverCard:đưa chuột vào hiện lên nội dung</h3>
      <HoverCardDemo />
      <h3>Menubar</h3>
      <MenubarDemo />
      <h3>NavigationMenu :menu chạy khi rê chuột vào</h3>
      <NavigationMenuDemo />
      <h3>SheetSide:giống như modal</h3>
      <SheetSide />
      <h3>Skeleton:giống như dữ liệu đang loading</h3>
      <SkeletonDemo />
      <h3>Tabs</h3>
      <TabsDemo />

      <h3>Tooltip:đưa chuột vào hiện lên nội dung</h3>
      <TooltipDemo />
    </div>
  );
}
