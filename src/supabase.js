import { createClient } from "@supabase/supabase-js";
import {createICSSRules} from "icss-utils";

const supabase = createClient (
	process.env.REACT_APP_SUPABASE_URL,
	process.env.REACT_APP_SUPABASE_PUBLIC_KEY
)

export { supabase }