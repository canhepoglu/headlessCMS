// Ortak tipler ve DTO'lar burada tanımlanacak

export type UserRole = 'ADMIN' | 'EDITOR' | 'AUTHOR';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: UserRole;
  created_at: string;
}

export interface ContentType {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
}

export interface Field {
  id: string;
  content_type_id: string;
  name: string;
  slug: string;
  type: string;
  required: boolean;
  options?: any;
  order: number;
}

export interface Entry {
  id: string;
  content_type_id: string;
  status: 'draft' | 'published';
  created_by: string;
  created_at: string;
  published_at?: string;
}

export interface EntryValue {
  id: string;
  entry_id: string;
  field_id: string;
  value_text?: string;
  value_number?: number;
  value_json?: any;
  value_boolean?: boolean;
}

export interface Media {
  id: string;
  url: string;
  mime_type: string;
  size: number;
  alt?: string;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}
