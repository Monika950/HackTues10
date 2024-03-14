import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ahbmrudxdkqgycsukfyk.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoYm1ydWR4ZGtxZ3ljc3VrZnlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MTU3NDQsImV4cCI6MjAyNTk5MTc0NH0.ylIUk4B_y5ubGIl2koOJRF1SVLbAsw1GuvadluWh240";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})