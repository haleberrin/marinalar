import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function seedAdmin() {
  console.log("👤 Admin User");

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  if (!email || !password) {
    throw new Error(
      "ADMIN_EMAIL ve ADMIN_PASSWORD environment variable'ları tanımlı olmalı."
    );
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await prisma.adminUser.upsert({
    where: {
      email,
    },

    update: {
      passwordHash,
      role: "admin",
    },

    create: {
      name: "Admin",
      email,
      passwordHash,
      role: "admin",
    },
  });

  console.log(`✅ Admin User: ${email}`);
}