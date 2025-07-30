const SUPABASE_URL = "https://ajttvgeytbfqgvxttyni.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqdHR2Z2V5dGJmcWd2eHR0eW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NzI2OTAsImV4cCI6MjA2NzQ0ODY5MH0.p1frkhPY30ekB1PmDnhCDqFO82C1dcZvnw9Ug_mAXQc";

const {createClient} = supabase;
const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log(createClient);


// Email/Password Sign In
 const loginform = document.getElementById("loginForm")
 loginform && loginform.addEventListener("submit", async (e) => {
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

// Google OAuth
const loginWithGoogle = document.getElementById('loginWithGoogle');
loginWithGoogle &&
	loginWithGoogle.addEventListener('click', async () => {
		try {

			const redirectTo =
              window.location.hostname === "127.0.0.1"
  ? window.location.origin + "/post.html"
  : window.location.origin + "/POST/post.html"



			const { error } = await client.auth.signInWithOAuth({
				provider: 'google',
				options: {
					redirectTo:  redirectTo,
					queryParams: { access_type: 'offline', prompt: 'consent' },
				},
			});
			if (error) throw error;
		} catch (error) {
			console.error('Google login error:', error);
			alert(error.message || 'Google login failed');
		}
	});

  // user name update

//   async function displayUser(){
// 	try {
// 		const {
// 			data : {user}, //renaming
// 			error,
// 		} = await client.auth.getuser()
// 		console.log(user);
		
// 	} catch (error) {
// 		console.log(error);
// 	}
//   }













  // Handle logout
// const logoutBtn = document.getElementById('logoutBtn');
// logoutBtn &&
// 	logoutBtn.addEventListener('click', async () => {
// 		try {
// 			const { error } = await client.auth.signOut();
// 			if (error) throw error;
// 			window.location.href = 'index.html';
// 		} catch (error) {
// 			console.error('Logout error:', error);
// 			alert('Logout failed');
// 		}
// 	});

// // Check for returning Google OAuth redirect
// document.addEventListener('DOMContentLoaded', async () => {
// 	if (window.location.hash.includes('access_token')) {
// 		const {
// 			data: { session },
// 		} = await client.auth.getSession();
// 		if (session) window.location.href = 'post.html';
// 	}
// 	if (!window.location.pathname.includes('index.html') && !window.location.pathname.includes('login.html')) {
// 		displayUser();
// 	}
// });












  

 