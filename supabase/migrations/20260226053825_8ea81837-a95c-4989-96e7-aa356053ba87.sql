ALTER TABLE public.bookings ALTER COLUMN preferred_date DROP NOT NULL;
ALTER TABLE public.bookings ALTER COLUMN preferred_date SET DEFAULT NULL;