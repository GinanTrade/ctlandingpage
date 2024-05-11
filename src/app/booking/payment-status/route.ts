import { redirect } from "next/navigation";

export async function POST(request: Request) {
  redirect("http://localhost:3000/booking/check-booking");
}
