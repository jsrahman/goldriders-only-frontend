import { z } from "zod";

function selectSchema(message = "") {
  return z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .nullish()
    .refine((val) => val !== null && val !== undefined, {
      message: message,
    });
}

const schema = {
  email: z.string().email("Invalid email"),
  name: z
    .string({ required_error: "Name is required" })
    .min(3, "Min 3 characters"),
  text: z
    .string({ required_error: "Text is required" })
    .min(3, "Min 3 characters"),
  phone: z
    .string({ required_error: "Phone is required" })
    .min(11, "Min 11 characters"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Min 6 characters"),
  username: z
    .string({ required_error: "Username is required" })
    .min(3, "Min 3 characters")
    .max(14, "Max 14 characters"),
  checkBox: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
  date: z.date().min(1, "Min 1 characters"),
};

export const loginSchema = z.object({
  email: schema.email,
  password: schema.password,
});
export const registerSchema = z.object({
  email: schema.email,
  username: schema.username,
  password: schema.password,
  terms: schema.checkBox,
});
export const registerDetailsSchema = z.object({
  name: schema.name,
  lastName: schema.name,
  gender: selectSchema("Select A Gender"),
  date: z.string({ required_error: "Date is required" }),
  currency: selectSchema("Select A Currency"),
  phoneNumber: schema.phone,
  country: selectSchema("Select A Country"),
  address: z.string().optional(),
  postalCode: z.string().optional(),
  terms: schema.checkBox,
});

export const profileEditSchema = z.object({
  username: schema.username,
  email: schema.email,
  phone: schema.phone,
});

export const changePasswordSchema = z
  .object({
    currentPassword: schema.password,
    newPassword: schema.password,
    confirmPassword: schema.password,
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const generalSettingsSchema = z.object({
  firstName: schema.name,
  lastName: schema.name,
  day: z
    .string({ required_error: "Day is required" })
    .min(1, "Day is required")
    .max(2, "Invalid day"),
  month: z
    .string({ required_error: "Month is required" })
    .min(1, "Month is required")
    .max(2, "Invalid month"),
  year: z
    .string({ required_error: "Year is required" })
    .min(4, "Year must be 4 digits")
    .max(4, "Year must be 4 digits"),
  gender: selectSchema("Select A Gender"),
  country: z
    .string({ required_error: "Country is required" })
    .min(2, "Min 2 characters"),
  city: z
    .string({ required_error: "City is required" })
    .min(2, "Min 2 characters"),
  postcode: z
    .string({ required_error: "Postcode is required" })
    .min(3, "Min 3 characters"),
  address: z
    .string({ required_error: "Address is required" })
    .min(5, "Min 5 characters"),
});

export const depositOthersSchema = z.object({
  firstName: schema.name,
  lastName: schema.name,
  email: schema.email,
  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .min(5, "Minimum deposit is €5")
    .max(500, "Maximum deposit is €500"),
});

export const depositCardSchema = z.object({
  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .min(5, "Minimum deposit is €5")
    .max(500, "Maximum deposit is €500"),
  cardNumber: z
    .string({ required_error: "Card number is required" })
    .min(16, "Card number must be 16 digits")
    .max(19, "Card number is too long")
    .regex(/^[\d\s]+$/, "Card number must contain only digits"),
  expiryMonth: z
    .string({ required_error: "Expiry month is required" })
    .regex(/^(0[1-9]|1[0-2])$/, "Month must be between 01 and 12"),

  expiryYear: z
    .string({ required_error: "Expiry year is required" })
    .regex(/^[0-9]{2}$/, "Year must be 2 digits")
    .refine((yy) => {
      const currentYear = new Date().getFullYear() % 100;
      return Number(yy) >= currentYear;
    }, "Card has expired"),
  cvc: z
    .string({ required_error: "CVC/CVV is required" })
    .min(3, "CVC must be at least 3 digits")
    .max(4, "CVC must be at most 4 digits")
    .regex(/^\d+$/, "CVC must contain only digits"),
  cardholderName: z
    .string({ required_error: "Cardholder name is required" })
    .min(3, "Min 3 characters"),
  saveCard: z.boolean().optional(),
});

export const mobilePaySchema = z.object({
  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .min(5, "Minimum deposit is €5")
    .max(500, "Maximum deposit is €500"),
});

export const withdrawBankSchema = z.object({
  currency: z.string({ required_error: "Currency is required" }),
  iban: z
    .string({ required_error: "IBAN is required" })
    .min(15, "IBAN must be at least 15 characters"),
  bic: z
    .string({ required_error: "BIC/SWIFT is required" })
    .min(8, "BIC/SWIFT must be at least 8 characters"),
  bankName: z
    .string({ required_error: "Bank name is required" })
    .min(2, "Min 2 characters"),
  accountOwner: z
    .string({ required_error: "Account owner name is required" })
    .min(3, "Min 3 characters"),
  bankCountry: z.string({ required_error: "Bank country is required" }),
  city: z
    .string({ required_error: "City is required" })
    .min(2, "Min 2 characters"),
  address: z
    .string({ required_error: "Address is required" })
    .min(5, "Min 5 characters"),
});

export const withdrawCryptoSchema = z.object({
  walletAddress: z
    .string({ required_error: "Wallet address is required" })
    .min(26, "Wallet address must be at least 26 characters"),
});
