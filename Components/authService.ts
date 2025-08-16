// authService.ts
import * as Google from 'expo-auth-session/providers/google';
import { auth } from './firebase_conts';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { useEffect } from 'react';

export function useGoogleAuth() {
  const [request, response, promptAsync] = Google.useAuthRequest({
   // expoClientId: '690679195517-6a15vce67moh79fphqlccu9p75ocg1c3.apps.googleusercontent.com', // Expo Go / Web
    iosClientId: '690679195517-dage9ecnhhfran22j2lb8b8t1gj9ba4g.apps.googleusercontent.com', // iOS
    androidClientId: '690679195517-TU_ANDROID_CLIENT_ID.apps.googleusercontent.com', // Android
    webClientId: '690679195517-6a15vce67moh79fphqlccu9p75ocg1c3.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success' && response.authentication) {
      const { idToken } = response.authentication; // ⚠️ Aquí debe ser idToken
      const credential = GoogleAuthProvider.credential(idToken);
      signInWithCredential(auth, credential)
        .then(userCredential => {
          console.log('Usuario autenticado:', userCredential.user);
        })
        .catch(error => {
          console.error('Error autenticando en Firebase:', error);
        });
    }
  }, [response]);

  return { promptAsync, request };
}
