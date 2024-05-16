import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import parsePhoneNumberFromString from "libphonenumber-js";

const zPhone = z.string().transform((arg, ctx) => {
  const phone = parsePhoneNumberFromString(arg, {
    // set this to use a default country when the phone number omits country code
    defaultCountry: "US",

    // set to false to require that the whole string is exactly a phone number,
    // otherwise, it will search for a phone number anywhere within the string
    extract: false,
  });

  // when it's good
  if (phone && phone.isValid()) {
    return phone.number;
  }

  // when it's not
  ctx.addIssue({
    code: z.ZodIssueCode.custom,
    message: "Invalid phone number",
  });
  return z.NEVER;
});

const formSchema = z.object({
  phone: zPhone,
});

function HomePage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    const { phone } = data;
    console.log(phone);
  }

  return (
    <div className="flex flex-col items-center justify-begin space-y-10 px-4 py-4 md:py-8">
      <div className="container space-y-10 xl:space-y-16">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            ZyBreak
          </h1>
          <div className="flex flex-col items-start space-y-4">
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              An advanced ZyBooks interactive textbook tool.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>
              Enter your phone number to start using ZyBreak.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onChange={form.handleSubmit(onSubmit)}
                className="flex items-center justify-center w-full h-20 space-x-4"
              >
                <div className="flex flex-row space-x-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Phone Number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">Get Started</Button>
                </div>
              </form>
            </Form>
          </CardContent>
          {/* <CardFooter>
            <div className="flex items-center justify-center w-full space-x-4">
              <p className="leading-7">
                Already have an account?{" "}
              </p>
              <Button variant="outline">Sign In</Button>
            </div>
          </CardFooter> */}
        </Card>
      </div>
    </div>
  );
}

export default HomePage;
