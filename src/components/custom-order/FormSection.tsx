import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Control } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./schema";

type FormSectionProps = {
  control: Control<z.infer<typeof formSchema>>;
  fields: {
    name: keyof z.infer<typeof formSchema>;
    label: string;
    type: "input" | "select";
    placeholder?: string;
    options?: { value: string; label: string }[];
  }[];
};

export const FormSection = ({ control, fields }: FormSectionProps) => {
  return (
    <>
      {fields.map((field) => (
        <FormField
          key={field.name}
          control={control}
          name={field.name}
          render={({ field: formField }) => (
            <FormItem>
              <FormLabel>{field.label}</FormLabel>
              <FormControl>
                {field.type === "input" ? (
                  <Input placeholder={field.placeholder} {...formField} />
                ) : (
                  <Select onValueChange={formField.onChange} defaultValue={formField.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={field.placeholder} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {field.options?.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </>
  );
};