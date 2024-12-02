<template>
   <h1>Social Login</h1>
   <button @click="loginGoogle">Login with Googe</button>
</template>
  
<script lang="ts" setup>
    import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth()

    const loginGoogle = () => {

        signInWithPopup(auth, googleProvider)
        .then( (result) =>{
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken;
            console.log(token)
            alert("Success")
        })
        .catch( (error) =>{
            alert("Login Failed")
        })
    }




</script>
  