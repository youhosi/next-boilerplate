"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function updateUsernameAction(formData) {
  const username = formData.get("username");

  if (!username) {
    return;
  }

  cookies().set("username", username);
  revalidatePath("/");
}
