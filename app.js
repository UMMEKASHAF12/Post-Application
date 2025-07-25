const SUPABASE_URL = "https://ajttvgeytbfqgvxttyni.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdHR2Z2V5dGJmcWd2eHR0eW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NzI2OTAsImV4cCI6MjA2NzQ0ODY5MH0.p1frkhPY30ekB1PmDnhCDqFO82C1dcZvnw9Ug_mAXQc";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 📥 Email/Password Sign In
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await client.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert("Login failed: " + error.message);
  } else {
    alert("Login successful!");
    window.location.href = "welcome.html"; 
  }
});

// 🔐 Google OAuth
document.getElementById("googleBtn").addEventListener("click", async () => {
  const { error } = await client.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "http://127.0.0.1:3000/post.html", 
    },
  });

  

  if (error) {
    console.error("Google login error:", error.message);
  }
});


