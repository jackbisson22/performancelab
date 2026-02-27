ALTER TABLE public.bookings ALTER COLUMN preferred_time DROP NOT NULL;
ALTER TABLE public.bookings ALTER COLUMN preferred_time SET DEFAULT NULL;