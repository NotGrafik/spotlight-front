<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { watch } from 'vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeClosed } from 'lucide-vue-next'

// Champs liés au formulaire
const fullName = ref('')
const email = ref('')
const password = ref('')
const showPassword = ref(false)

const router = useRouter();

const formErrors = reactive({
  fullName: '',
  email: '',
  password: '',
})

watch(
  [fullName, email, password],
  () => {
    formErrors.fullName = ''
    formErrors.email = ''
    formErrors.password = ''
  },
)

const schema = z.object({
  fullName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(30, 'First name must be at most 30 characters')
    .regex(/^[a-zA-ZÀ-ÿ\-'\s]+$/, 'First name contains invalid characters'),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),

  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password must be at most 64 characters')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one digit')
    .regex(/[^a-zA-Z0-9]/, 'Password must contain at least one special character'),
})



const handleSubmit = () => {
  // Réinitialiser les erreurs
  formErrors.fullName = ''
  formErrors.email = ''
  formErrors.password = ''

  const result = schema.safeParse({
    fullName: fullName.value,
    email: email.value,
    password: password.value,
  })

  if (!result.success) {
    result.error.errors.forEach((err) => {
      const field = err.path[0] as keyof typeof formErrors
      formErrors[field] = err.message
    })
    return
  }

  fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fullName: fullName.value,
      email: email.value,
      passwordHash: password.value,
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error('Network response was not ok')
      return response.json()
    })
    .then((data) => {
      console.log('Success:', data)
      router.push('/login');
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}
</script>

<template>
  <div
    class="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10"
    style="background-image: url('src/assets/background.png'); background-size: cover;"
  >
    <Card class="w-full max-w-sm">
      <CardHeader>
        <CardTitle class="text-xl text-center"> S'inscrire </CardTitle>
        <CardDescription class="text-center">
          Créer ton compte Spotlight dès maintenant
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form class="grid gap-6" @submit.prevent="handleSubmit">
          <div class="grid gap-2">
            <Label for="full-name">Nom Complet</Label>
            <Input
              id="full-name"
              v-model="fullName"
              placeholder="Max"
              :class="formErrors.fullName ? 'border-red-500 ring-1 ring-red-500' : ''"
            />
            <p v-if="formErrors.fullName" class="text-sm text-red-500">{{ formErrors.fullName }}</p>
          </div>

          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              v-model="email"
              type="email"
              placeholder="m@example.com"
              :class="formErrors.email ? 'border-red-500 ring-1 ring-red-500' : ''"
            />
            <p v-if="formErrors.email" class="text-sm text-red-500">{{ formErrors.email }}</p>
          </div>

          <div class="grid gap-2">
            <Label for="password">Mot de passe</Label>
            <div class="relative w-full max-w-sm">
              <Input
                id="password"
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                placeholder="••••"
                class="pr-10"
                :class="formErrors.password ? 'border-red-500 ring-1 ring-red-500' : ''"
              />
              <span
                class="absolute end-0 inset-y-0 flex items-center justify-center px-2 cursor-pointer"
                @click="showPassword = !showPassword"
              >
                <EyeClosed v-if="!showPassword" class="size-5 text-muted-foreground" />
                <Eye v-if="showPassword" class="size-5 text-muted-foreground" />
              </span>
            </div>
            <p v-if="formErrors.password" class="text-sm text-red-500">{{ formErrors.password }}</p>
          </div>

          <Button type="submit" class="w-full h">Nous rejoindre</Button>
        </form>
        <div class="mt-4 text-center text-sm">
          Already have an account?
          <a href="/login" class="underline"> Sign in </a>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
