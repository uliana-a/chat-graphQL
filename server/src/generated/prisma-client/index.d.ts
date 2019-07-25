// Code generated by Prisma (prisma@1.34.3). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  message: (where?: MessageWhereInput) => Promise<boolean>;
  response: (where?: ResponseWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  message: (where: MessageWhereUniqueInput) => MessageNullablePromise;
  messages: (args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Message>;
  messagesConnection: (args?: {
    where?: MessageWhereInput;
    orderBy?: MessageOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => MessageConnectionPromise;
  response: (where: ResponseWhereUniqueInput) => ResponseNullablePromise;
  responses: (args?: {
    where?: ResponseWhereInput;
    orderBy?: ResponseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Response>;
  responsesConnection: (args?: {
    where?: ResponseWhereInput;
    orderBy?: ResponseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ResponseConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createMessage: (data: MessageCreateInput) => MessagePromise;
  updateMessage: (args: {
    data: MessageUpdateInput;
    where: MessageWhereUniqueInput;
  }) => MessagePromise;
  updateManyMessages: (args: {
    data: MessageUpdateManyMutationInput;
    where?: MessageWhereInput;
  }) => BatchPayloadPromise;
  upsertMessage: (args: {
    where: MessageWhereUniqueInput;
    create: MessageCreateInput;
    update: MessageUpdateInput;
  }) => MessagePromise;
  deleteMessage: (where: MessageWhereUniqueInput) => MessagePromise;
  deleteManyMessages: (where?: MessageWhereInput) => BatchPayloadPromise;
  createResponse: (data: ResponseCreateInput) => ResponsePromise;
  updateResponse: (args: {
    data: ResponseUpdateInput;
    where: ResponseWhereUniqueInput;
  }) => ResponsePromise;
  updateManyResponses: (args: {
    data: ResponseUpdateManyMutationInput;
    where?: ResponseWhereInput;
  }) => BatchPayloadPromise;
  upsertResponse: (args: {
    where: ResponseWhereUniqueInput;
    create: ResponseCreateInput;
    update: ResponseUpdateInput;
  }) => ResponsePromise;
  deleteResponse: (where: ResponseWhereUniqueInput) => ResponsePromise;
  deleteManyResponses: (where?: ResponseWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  message: (
    where?: MessageSubscriptionWhereInput
  ) => MessageSubscriptionPayloadSubscription;
  response: (
    where?: ResponseSubscriptionWhereInput
  ) => ResponseSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ResponseOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "text_ASC"
  | "text_DESC"
  | "likeCount_ASC"
  | "likeCount_DESC"
  | "dislikeCount_ASC"
  | "dislikeCount_DESC";

export type MessageOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "text_ASC"
  | "text_DESC"
  | "likeCount_ASC"
  | "likeCount_DESC"
  | "dislikeCount_ASC"
  | "dislikeCount_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface ResponseUpdateManyWithoutMessageInput {
  create?: Maybe<
    ResponseCreateWithoutMessageInput[] | ResponseCreateWithoutMessageInput
  >;
  delete?: Maybe<ResponseWhereUniqueInput[] | ResponseWhereUniqueInput>;
  connect?: Maybe<ResponseWhereUniqueInput[] | ResponseWhereUniqueInput>;
  set?: Maybe<ResponseWhereUniqueInput[] | ResponseWhereUniqueInput>;
  disconnect?: Maybe<ResponseWhereUniqueInput[] | ResponseWhereUniqueInput>;
  update?: Maybe<
    | ResponseUpdateWithWhereUniqueWithoutMessageInput[]
    | ResponseUpdateWithWhereUniqueWithoutMessageInput
  >;
  upsert?: Maybe<
    | ResponseUpsertWithWhereUniqueWithoutMessageInput[]
    | ResponseUpsertWithWhereUniqueWithoutMessageInput
  >;
  deleteMany?: Maybe<ResponseScalarWhereInput[] | ResponseScalarWhereInput>;
  updateMany?: Maybe<
    | ResponseUpdateManyWithWhereNestedInput[]
    | ResponseUpdateManyWithWhereNestedInput
  >;
}

export type MessageWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ResponseCreateInput {
  id?: Maybe<ID_Input>;
  text: String;
  likeCount: Int;
  dislikeCount: Int;
  message: MessageCreateOneWithoutResponsesInput;
}

export interface ResponseUpdateManyWithWhereNestedInput {
  where: ResponseScalarWhereInput;
  data: ResponseUpdateManyDataInput;
}

export interface MessageUpdateManyMutationInput {
  text?: Maybe<String>;
  likeCount?: Maybe<Int>;
  dislikeCount?: Maybe<Int>;
}

export interface ResponseUpdateWithoutMessageDataInput {
  text?: Maybe<String>;
  likeCount?: Maybe<Int>;
  dislikeCount?: Maybe<Int>;
}

export interface ResponseSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ResponseWhereInput>;
  AND?: Maybe<
    ResponseSubscriptionWhereInput[] | ResponseSubscriptionWhereInput
  >;
  OR?: Maybe<ResponseSubscriptionWhereInput[] | ResponseSubscriptionWhereInput>;
  NOT?: Maybe<
    ResponseSubscriptionWhereInput[] | ResponseSubscriptionWhereInput
  >;
}

export interface ResponseUpdateManyMutationInput {
  text?: Maybe<String>;
  likeCount?: Maybe<Int>;
  dislikeCount?: Maybe<Int>;
}

export interface MessageCreateInput {
  id?: Maybe<ID_Input>;
  text: String;
  likeCount: Int;
  dislikeCount: Int;
  responses?: Maybe<ResponseCreateManyWithoutMessageInput>;
}

export interface MessageUpdateWithoutResponsesDataInput {
  text?: Maybe<String>;
  likeCount?: Maybe<Int>;
  dislikeCount?: Maybe<Int>;
}

export interface ResponseCreateManyWithoutMessageInput {
  create?: Maybe<
    ResponseCreateWithoutMessageInput[] | ResponseCreateWithoutMessageInput
  >;
  connect?: Maybe<ResponseWhereUniqueInput[] | ResponseWhereUniqueInput>;
}

export interface ResponseUpdateInput {
  text?: Maybe<String>;
  likeCount?: Maybe<Int>;
  dislikeCount?: Maybe<Int>;
  message?: Maybe<MessageUpdateOneRequiredWithoutResponsesInput>;
}

export interface ResponseCreateWithoutMessageInput {
  id?: Maybe<ID_Input>;
  text: String;
  likeCount: Int;
  dislikeCount: Int;
}

export type ResponseWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface MessageUpdateInput {
  text?: Maybe<String>;
  likeCount?: Maybe<Int>;
  dislikeCount?: Maybe<Int>;
  responses?: Maybe<ResponseUpdateManyWithoutMessageInput>;
}

export interface MessageWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  likeCount?: Maybe<Int>;
  likeCount_not?: Maybe<Int>;
  likeCount_in?: Maybe<Int[] | Int>;
  likeCount_not_in?: Maybe<Int[] | Int>;
  likeCount_lt?: Maybe<Int>;
  likeCount_lte?: Maybe<Int>;
  likeCount_gt?: Maybe<Int>;
  likeCount_gte?: Maybe<Int>;
  dislikeCount?: Maybe<Int>;
  dislikeCount_not?: Maybe<Int>;
  dislikeCount_in?: Maybe<Int[] | Int>;
  dislikeCount_not_in?: Maybe<Int[] | Int>;
  dislikeCount_lt?: Maybe<Int>;
  dislikeCount_lte?: Maybe<Int>;
  dislikeCount_gt?: Maybe<Int>;
  dislikeCount_gte?: Maybe<Int>;
  responses_every?: Maybe<ResponseWhereInput>;
  responses_some?: Maybe<ResponseWhereInput>;
  responses_none?: Maybe<ResponseWhereInput>;
  AND?: Maybe<MessageWhereInput[] | MessageWhereInput>;
  OR?: Maybe<MessageWhereInput[] | MessageWhereInput>;
  NOT?: Maybe<MessageWhereInput[] | MessageWhereInput>;
}

export interface ResponseUpdateManyDataInput {
  text?: Maybe<String>;
  likeCount?: Maybe<Int>;
  dislikeCount?: Maybe<Int>;
}

export interface MessageUpsertWithoutResponsesInput {
  update: MessageUpdateWithoutResponsesDataInput;
  create: MessageCreateWithoutResponsesInput;
}

export interface ResponseScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  likeCount?: Maybe<Int>;
  likeCount_not?: Maybe<Int>;
  likeCount_in?: Maybe<Int[] | Int>;
  likeCount_not_in?: Maybe<Int[] | Int>;
  likeCount_lt?: Maybe<Int>;
  likeCount_lte?: Maybe<Int>;
  likeCount_gt?: Maybe<Int>;
  likeCount_gte?: Maybe<Int>;
  dislikeCount?: Maybe<Int>;
  dislikeCount_not?: Maybe<Int>;
  dislikeCount_in?: Maybe<Int[] | Int>;
  dislikeCount_not_in?: Maybe<Int[] | Int>;
  dislikeCount_lt?: Maybe<Int>;
  dislikeCount_lte?: Maybe<Int>;
  dislikeCount_gt?: Maybe<Int>;
  dislikeCount_gte?: Maybe<Int>;
  AND?: Maybe<ResponseScalarWhereInput[] | ResponseScalarWhereInput>;
  OR?: Maybe<ResponseScalarWhereInput[] | ResponseScalarWhereInput>;
  NOT?: Maybe<ResponseScalarWhereInput[] | ResponseScalarWhereInput>;
}

export interface ResponseUpsertWithWhereUniqueWithoutMessageInput {
  where: ResponseWhereUniqueInput;
  update: ResponseUpdateWithoutMessageDataInput;
  create: ResponseCreateWithoutMessageInput;
}

export interface ResponseWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  text?: Maybe<String>;
  text_not?: Maybe<String>;
  text_in?: Maybe<String[] | String>;
  text_not_in?: Maybe<String[] | String>;
  text_lt?: Maybe<String>;
  text_lte?: Maybe<String>;
  text_gt?: Maybe<String>;
  text_gte?: Maybe<String>;
  text_contains?: Maybe<String>;
  text_not_contains?: Maybe<String>;
  text_starts_with?: Maybe<String>;
  text_not_starts_with?: Maybe<String>;
  text_ends_with?: Maybe<String>;
  text_not_ends_with?: Maybe<String>;
  likeCount?: Maybe<Int>;
  likeCount_not?: Maybe<Int>;
  likeCount_in?: Maybe<Int[] | Int>;
  likeCount_not_in?: Maybe<Int[] | Int>;
  likeCount_lt?: Maybe<Int>;
  likeCount_lte?: Maybe<Int>;
  likeCount_gt?: Maybe<Int>;
  likeCount_gte?: Maybe<Int>;
  dislikeCount?: Maybe<Int>;
  dislikeCount_not?: Maybe<Int>;
  dislikeCount_in?: Maybe<Int[] | Int>;
  dislikeCount_not_in?: Maybe<Int[] | Int>;
  dislikeCount_lt?: Maybe<Int>;
  dislikeCount_lte?: Maybe<Int>;
  dislikeCount_gt?: Maybe<Int>;
  dislikeCount_gte?: Maybe<Int>;
  message?: Maybe<MessageWhereInput>;
  AND?: Maybe<ResponseWhereInput[] | ResponseWhereInput>;
  OR?: Maybe<ResponseWhereInput[] | ResponseWhereInput>;
  NOT?: Maybe<ResponseWhereInput[] | ResponseWhereInput>;
}

export interface ResponseUpdateWithWhereUniqueWithoutMessageInput {
  where: ResponseWhereUniqueInput;
  data: ResponseUpdateWithoutMessageDataInput;
}

export interface MessageUpdateOneRequiredWithoutResponsesInput {
  create?: Maybe<MessageCreateWithoutResponsesInput>;
  update?: Maybe<MessageUpdateWithoutResponsesDataInput>;
  upsert?: Maybe<MessageUpsertWithoutResponsesInput>;
  connect?: Maybe<MessageWhereUniqueInput>;
}

export interface MessageSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<MessageWhereInput>;
  AND?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
  OR?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
  NOT?: Maybe<MessageSubscriptionWhereInput[] | MessageSubscriptionWhereInput>;
}

export interface MessageCreateOneWithoutResponsesInput {
  create?: Maybe<MessageCreateWithoutResponsesInput>;
  connect?: Maybe<MessageWhereUniqueInput>;
}

export interface MessageCreateWithoutResponsesInput {
  id?: Maybe<ID_Input>;
  text: String;
  likeCount: Int;
  dislikeCount: Int;
}

export interface NodeNode {
  id: ID_Output;
}

export interface ResponsePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  text: String;
  likeCount: Int;
  dislikeCount: Int;
}

export interface ResponsePreviousValuesPromise
  extends Promise<ResponsePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  text: () => Promise<String>;
  likeCount: () => Promise<Int>;
  dislikeCount: () => Promise<Int>;
}

export interface ResponsePreviousValuesSubscription
  extends Promise<AsyncIterator<ResponsePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  text: () => Promise<AsyncIterator<String>>;
  likeCount: () => Promise<AsyncIterator<Int>>;
  dislikeCount: () => Promise<AsyncIterator<Int>>;
}

export interface MessageEdge {
  node: Message;
  cursor: String;
}

export interface MessageEdgePromise extends Promise<MessageEdge>, Fragmentable {
  node: <T = MessagePromise>() => T;
  cursor: () => Promise<String>;
}

export interface MessageEdgeSubscription
  extends Promise<AsyncIterator<MessageEdge>>,
    Fragmentable {
  node: <T = MessageSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface Message {
  id: ID_Output;
  createdAt: DateTimeOutput;
  text: String;
  likeCount: Int;
  dislikeCount: Int;
}

export interface MessagePromise extends Promise<Message>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  text: () => Promise<String>;
  likeCount: () => Promise<Int>;
  dislikeCount: () => Promise<Int>;
  responses: <T = FragmentableArray<Response>>(args?: {
    where?: ResponseWhereInput;
    orderBy?: ResponseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface MessageSubscription
  extends Promise<AsyncIterator<Message>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  text: () => Promise<AsyncIterator<String>>;
  likeCount: () => Promise<AsyncIterator<Int>>;
  dislikeCount: () => Promise<AsyncIterator<Int>>;
  responses: <T = Promise<AsyncIterator<ResponseSubscription>>>(args?: {
    where?: ResponseWhereInput;
    orderBy?: ResponseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface MessageNullablePromise
  extends Promise<Message | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  text: () => Promise<String>;
  likeCount: () => Promise<Int>;
  dislikeCount: () => Promise<Int>;
  responses: <T = FragmentableArray<Response>>(args?: {
    where?: ResponseWhereInput;
    orderBy?: ResponseOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface MessagePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  text: String;
  likeCount: Int;
  dislikeCount: Int;
}

export interface MessagePreviousValuesPromise
  extends Promise<MessagePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  text: () => Promise<String>;
  likeCount: () => Promise<Int>;
  dislikeCount: () => Promise<Int>;
}

export interface MessagePreviousValuesSubscription
  extends Promise<AsyncIterator<MessagePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  text: () => Promise<AsyncIterator<String>>;
  likeCount: () => Promise<AsyncIterator<Int>>;
  dislikeCount: () => Promise<AsyncIterator<Int>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ResponseSubscriptionPayload {
  mutation: MutationType;
  node: Response;
  updatedFields: String[];
  previousValues: ResponsePreviousValues;
}

export interface ResponseSubscriptionPayloadPromise
  extends Promise<ResponseSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ResponsePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ResponsePreviousValuesPromise>() => T;
}

export interface ResponseSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ResponseSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ResponseSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ResponsePreviousValuesSubscription>() => T;
}

export interface Response {
  id: ID_Output;
  createdAt: DateTimeOutput;
  text: String;
  likeCount: Int;
  dislikeCount: Int;
}

export interface ResponsePromise extends Promise<Response>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  text: () => Promise<String>;
  likeCount: () => Promise<Int>;
  dislikeCount: () => Promise<Int>;
  message: <T = MessagePromise>() => T;
}

export interface ResponseSubscription
  extends Promise<AsyncIterator<Response>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  text: () => Promise<AsyncIterator<String>>;
  likeCount: () => Promise<AsyncIterator<Int>>;
  dislikeCount: () => Promise<AsyncIterator<Int>>;
  message: <T = MessageSubscription>() => T;
}

export interface ResponseNullablePromise
  extends Promise<Response | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  text: () => Promise<String>;
  likeCount: () => Promise<Int>;
  dislikeCount: () => Promise<Int>;
  message: <T = MessagePromise>() => T;
}

export interface MessageSubscriptionPayload {
  mutation: MutationType;
  node: Message;
  updatedFields: String[];
  previousValues: MessagePreviousValues;
}

export interface MessageSubscriptionPayloadPromise
  extends Promise<MessageSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = MessagePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = MessagePreviousValuesPromise>() => T;
}

export interface MessageSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<MessageSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = MessageSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = MessagePreviousValuesSubscription>() => T;
}

export interface MessageConnection {
  pageInfo: PageInfo;
  edges: MessageEdge[];
}

export interface MessageConnectionPromise
  extends Promise<MessageConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<MessageEdge>>() => T;
  aggregate: <T = AggregateMessagePromise>() => T;
}

export interface MessageConnectionSubscription
  extends Promise<AsyncIterator<MessageConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<MessageEdgeSubscription>>>() => T;
  aggregate: <T = AggregateMessageSubscription>() => T;
}

export interface AggregateResponse {
  count: Int;
}

export interface AggregateResponsePromise
  extends Promise<AggregateResponse>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateResponseSubscription
  extends Promise<AsyncIterator<AggregateResponse>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ResponseEdge {
  node: Response;
  cursor: String;
}

export interface ResponseEdgePromise
  extends Promise<ResponseEdge>,
    Fragmentable {
  node: <T = ResponsePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ResponseEdgeSubscription
  extends Promise<AsyncIterator<ResponseEdge>>,
    Fragmentable {
  node: <T = ResponseSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateMessage {
  count: Int;
}

export interface AggregateMessagePromise
  extends Promise<AggregateMessage>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateMessageSubscription
  extends Promise<AsyncIterator<AggregateMessage>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ResponseConnection {
  pageInfo: PageInfo;
  edges: ResponseEdge[];
}

export interface ResponseConnectionPromise
  extends Promise<ResponseConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ResponseEdge>>() => T;
  aggregate: <T = AggregateResponsePromise>() => T;
}

export interface ResponseConnectionSubscription
  extends Promise<AsyncIterator<ResponseConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ResponseEdgeSubscription>>>() => T;
  aggregate: <T = AggregateResponseSubscription>() => T;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Message",
    embedded: false
  },
  {
    name: "Response",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
