
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cjgeydhzowspfovlfvra.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqZ2V5ZGh6b3dzcGZvdmxmdnJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4ODg4NzgsImV4cCI6MjA2OTQ2NDg3OH0.mHzhAnAxAdh3g-b8maJjmYUhVnaZYYf7hruFUsiwagE'
export const supabase = createClient(supabaseUrl, supabaseKey)