// import { createClient } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseAdminKey = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!;
export const supabase = createBrowserClient(supabaseUrl, supabaseKey);
// export const supabaseAdmin = createClient(supabaseUrl, supabaseAdminKey); //sirvice role key supposed for admin

// export function createClient() {
//   return createBrowserClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//   );
// }
//
//if i use in middleware helper of supabase khess darori t cree bih client b createClientComponentsClient o respect the nomination of variabls env htach makdewes l function walo howa kaayakhdhom men env diractement
// NEXT_PUBLIC_SUPABASE_URL
// NEXT_PUBLIC_SUPABASE_ANON_KEY
// NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY hado b 3 il faut resp
