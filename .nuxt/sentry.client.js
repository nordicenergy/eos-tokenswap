import Vue from 'vue'
import * as Sentry from '@sentry/browser'

export default function (ctx, inject) {
  const opts = Object.assign({}, {"dsn":"https:\u002F\u002Fa2a78e2d93f6406ab3bea315676f5517@sentry.io\u002F1411799","environment":"production"}, {
    integrations: [
      new Sentry.Integrations.Dedupe,
      new Sentry.Integrations.ExtraErrorData,
      new Sentry.Integrations.InboundFilters,
      new Sentry.Integrations.FunctionToString,
      new Sentry.Integrations.TryCatch,
      new Sentry.Integrations.Breadcrumbs,
      new Sentry.Integrations.GlobalHandlers,
      new Sentry.Integrations.LinkedErrors,
      new Sentry.Integrations.UserAgent,
      new Sentry.Integrations.Vue({ Vue })
    ]
  })

  if (!opts.disabled) {
    Sentry.init(opts)
  }

  // Inject Sentry to the context as $sentry
  ctx.$sentry = Sentry
  inject('sentry', Sentry)
}
