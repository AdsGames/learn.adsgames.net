import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN ?? process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
  dsn:
    SENTRY_DSN ??
    "https://19b29efc4c9c454d94cd1508f7bd874f@o1178011.ingest.sentry.io/6717247",
  tracesSampleRate: 1.0,
});
