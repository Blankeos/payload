import type { CreateGlobal } from 'payload/database'
import type { PayloadRequest, TypeWithID } from 'payload/types'

import toSnakeCase from 'to-snake-case'

import type { PostgresAdapter } from './types'

import { upsertRow } from './upsertRow'

export const createGlobal: CreateGlobal = async function createGlobal<T extends TypeWithID>(
  this: PostgresAdapter,
  { data, req = {} as PayloadRequest, slug },
) {
  const db = this.sessions?.[req.transactionID] || this.db
  const globalConfig = this.payload.globals.config.find((config) => config.slug === slug)

  const result = await upsertRow<T>({
    adapter: this,
    data,
    db,
    fields: globalConfig.fields,
    operation: 'create',
    tableName: toSnakeCase(slug),
  })

  return result
}