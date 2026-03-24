interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  createdAt: Date;
  updatedAt: Date;
}

interface DashboardSettings {
  theme: 'light' | 'dark';
  notificationsEnabled: boolean;
  language: 'en' | 'es' | 'fr';
}

interface UserDashboardState {
  user: User | null;
  settings: DashboardSettings;
  isLoading: boolean;
  error: string | null;
}

type UpdateUserPayload = Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>>;

type UpdateSettingsPayload = Partial<DashboardSettings>;

export type { User, DashboardSettings, UserDashboardState, UpdateUserPayload, UpdateSettingsPayload };