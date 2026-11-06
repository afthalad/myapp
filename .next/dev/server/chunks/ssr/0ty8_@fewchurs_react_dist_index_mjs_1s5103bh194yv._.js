module.exports = [
"[project]/node_modules/@fewchurs/next/node_modules/@fewchurs/react/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoardRoot",
    ()=>BoardRoot,
    "BoardTabs",
    ()=>BoardTabs,
    "Branding",
    ()=>Branding,
    "CommentForm",
    ()=>CommentForm,
    "CommentList",
    ()=>CommentList,
    "DEFAULT_BASE_URL",
    ()=>DEFAULT_BASE_URL,
    "DEFAULT_LABELS",
    ()=>DEFAULT_LABELS,
    "DEFAULT_PAGE_SIZE",
    ()=>DEFAULT_PAGE_SIZE,
    "DEVICE_ID_COOKIE",
    ()=>COOKIE_NAME,
    "FeatureCard",
    ()=>FeatureCard,
    "FeatureList",
    ()=>FeatureList,
    "FewchursBoard",
    ()=>FewchursBoard,
    "FewchursBoardDialog",
    ()=>FewchursBoardDialog,
    "FewchursButton",
    ()=>FewchursButton,
    "FewchursProvider",
    ()=>FewchursProvider,
    "FollowForm",
    ()=>FollowForm,
    "LIMITS",
    ()=>LIMITS,
    "NOT_CONFIGURED_MESSAGE",
    ()=>NOT_CONFIGURED_MESSAGE,
    "ROADMAP_STATUSES",
    ()=>ROADMAP_STATUSES,
    "SDK_HEADER",
    ()=>SDK_HEADER,
    "SDK_VERSION",
    ()=>SDK_VERSION,
    "StatusBadge",
    ()=>StatusBadge,
    "SubmitForm",
    ()=>SubmitForm,
    "SubmitTrigger",
    ()=>SubmitTrigger,
    "VoteButton",
    ()=>VoteButton,
    "commentsStateOf",
    ()=>commentsStateOf,
    "createDeviceId",
    ()=>createDeviceId,
    "createFewchursClient",
    ()=>createFewchursClient,
    "createStore",
    ()=>createStore,
    "errorFromResponse",
    ()=>errorFromResponse,
    "featureKey",
    ()=>featureKey,
    "listKey",
    ()=>listKey,
    "listStateOf",
    ()=>listStateOf,
    "mergeLabels",
    ()=>mergeLabels,
    "networkError",
    ()=>networkError,
    "normalizeComment",
    ()=>normalizeComment,
    "normalizeCommentPage",
    ()=>normalizeCommentPage,
    "normalizeConfig",
    ()=>normalizeConfig,
    "normalizeFeature",
    ()=>normalizeFeature,
    "normalizeFeaturePage",
    ()=>normalizeFeaturePage,
    "normalizeStatus",
    ()=>normalizeStatus,
    "normalizeVote",
    ()=>normalizeVote,
    "readDeviceId",
    ()=>readDeviceId,
    "resolveDeviceId",
    ()=>resolveDeviceId,
    "useBoard",
    ()=>useBoard,
    "useComments",
    ()=>useComments,
    "useFeature",
    ()=>useFeature,
    "useFeatures",
    ()=>useFeatures,
    "useFewchurs",
    ()=>useFewchurs,
    "useFewchursConfig",
    ()=>useFewchursConfig,
    "useFollow",
    ()=>useFollow,
    "useSubmitFeature",
    ()=>useSubmitFeature,
    "useVote",
    ()=>useVote,
    "userMessage",
    ()=>userMessage,
    "validateCommentInput",
    ()=>validateCommentInput,
    "validateEmail",
    ()=>validateEmail,
    "validateFeatureInput",
    ()=>validateFeatureInput,
    "validationError",
    ()=>validationError
]);
// src/context/provider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// src/context/provider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
"use client";
;
// src/client/version.ts
var SDK_VERSION = "1.5.0";
// src/client/constants.ts
var SDK_HEADER = `react/${SDK_VERSION}`;
var DEFAULT_BASE_URL = "https://www.fewchurs.com/api/v1";
var DEFAULT_PAGE_SIZE = 20;
var LIMITS = {
    titleMin: 3,
    titleMax: 100,
    descriptionMax: 1e3,
    commentMin: 1,
    commentMax: 1e3,
    authorNameMax: 60
};
var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var ROADMAP_STATUSES = [
    "planned",
    "in_progress",
    "done"
];
// src/client/errors.ts
var NOT_CONFIGURED_MESSAGE = "Fewchurs is not configured.";
var USER_MESSAGES = {
    invalid_key: "Invalid API key. Check the key in your Fewchurs dashboard.",
    validation_failed: "Invalid input.",
    rate_limited: "You've reached today's limit. Try again tomorrow.",
    not_found: "This request no longer exists.",
    limit_reached: "This board isn't accepting requests right now.",
    server: "Something went wrong. Try again.",
    network: "You're offline."
};
function isWrongApp(error) {
    return error.code === "invalid_key" && error.status === 403;
}
function isNotConfigured(error) {
    return error.code === "server" && error.message === NOT_CONFIGURED_MESSAGE;
}
function notConfiguredError() {
    return {
        code: "server",
        status: 500,
        message: NOT_CONFIGURED_MESSAGE
    };
}
function userMessage(error) {
    if (error.code === "validation_failed" && error.message) return error.message;
    if (isWrongApp(error) && error.message) return error.message;
    return USER_MESSAGES[error.code];
}
function networkError(message = "Network request failed.") {
    return {
        code: "network",
        message
    };
}
function validationError(message) {
    return {
        code: "validation_failed",
        status: 400,
        message
    };
}
function errorFromResponse(status, body) {
    const code = body?.error?.code;
    const serverMessage = body?.error?.message;
    const message = serverMessage ?? `Request failed (${status}).`;
    switch(code){
        case "invalid_key":
            return {
                code: "invalid_key",
                status: 401,
                message
            };
        case "wrong_app":
            return {
                code: "invalid_key",
                status: 403,
                message
            };
        case "missing_device_id":
            return {
                code: "server",
                status: 400,
                message
            };
        case "validation_failed":
            return {
                code: "validation_failed",
                status: 400,
                message: serverMessage ?? "Invalid input."
            };
        case "rate_limited":
            return {
                code: "rate_limited",
                status: 429,
                message
            };
        case "not_found":
            return {
                code: "not_found",
                status: 404,
                message
            };
        case "limit_reached":
            return {
                code: "limit_reached",
                status: 402,
                message
            };
        default:
            return status === 401 ? {
                code: "invalid_key",
                status: 401,
                message
            } : {
                code: "server",
                status,
                message
            };
    }
}
// src/client/normalize.ts
var KNOWN_STATUSES = /* @__PURE__ */ new Set([
    "open",
    "planned",
    "in_progress",
    "done",
    "declined"
]);
function asRecord(value) {
    return typeof value === "object" && value !== null ? value : {};
}
function str(value, fallback = "") {
    return typeof value === "string" ? value : fallback;
}
function num(value) {
    return typeof value === "number" && Number.isFinite(value) ? value : 0;
}
function bool(value) {
    return value === true;
}
function normalizeStatus(value) {
    return typeof value === "string" && KNOWN_STATUSES.has(value) ? value : "unknown";
}
function isMine(raw, ownerKey, deviceId) {
    if (typeof raw.isMine === "boolean") return raw.isMine;
    const owner = raw[ownerKey];
    return typeof owner === "string" && owner.length > 0 && owner === deviceId;
}
function normalizeFeature(value, deviceId) {
    const raw = asRecord(value);
    return {
        id: str(raw.id),
        title: str(raw.title),
        description: str(raw.description),
        status: normalizeStatus(raw.status),
        upvoteCount: num(raw.upvoteCount),
        commentCount: num(raw.commentCount),
        followerCount: num(raw.followerCount),
        hasVoted: bool(raw.hasVoted),
        isFollowing: bool(raw.isFollowing),
        isMine: isMine(raw, "authorDeviceId", deviceId),
        createdAt: str(raw.createdAt),
        updatedAt: str(raw.updatedAt, str(raw.createdAt))
    };
}
function normalizeComment(value, deviceId) {
    const raw = asRecord(value);
    return {
        id: str(raw.id),
        text: str(raw.text),
        authorName: str(raw.authorName, "App User"),
        isDeveloper: bool(raw.isDeveloper),
        isMine: isMine(raw, "deviceId", deviceId),
        createdAt: str(raw.createdAt)
    };
}
function normalizeFeaturePage(value, deviceId) {
    const raw = asRecord(value);
    const features = Array.isArray(raw.features) ? raw.features : [];
    return {
        features: features.map((feature)=>normalizeFeature(feature, deviceId)),
        nextCursor: typeof raw.nextCursor === "string" ? raw.nextCursor : null
    };
}
function normalizeCommentPage(value, deviceId) {
    const raw = asRecord(value);
    const comments = Array.isArray(raw.comments) ? raw.comments : [];
    return {
        comments: comments.map((comment)=>normalizeComment(comment, deviceId)),
        nextCursor: typeof raw.nextCursor === "string" ? raw.nextCursor : null
    };
}
function normalizeConfig(value) {
    const raw = asRecord(value);
    return {
        showBranding: raw.showBranding !== false,
        hideVoteCounts: bool(raw.hideVoteCounts),
        appName: typeof raw.appName === "string" && raw.appName ? raw.appName : null
    };
}
function normalizeVote(value) {
    const raw = asRecord(value);
    return {
        upvoteCount: num(raw.upvoteCount),
        hasVoted: bool(raw.hasVoted)
    };
}
// src/client/validate.ts
function validateFeatureInput(input) {
    const title = input.title.trim();
    if (title.length < LIMITS.titleMin || title.length > LIMITS.titleMax) {
        return validationError(`Title must be ${LIMITS.titleMin}\u2013${LIMITS.titleMax} characters.`);
    }
    if ((input.description ?? "").trim().length > LIMITS.descriptionMax) {
        return validationError(`Description must be at most ${LIMITS.descriptionMax} characters.`);
    }
    if (input.email !== void 0 && input.email !== "" && !isEmail(input.email)) {
        return validationError("Enter a valid email address.");
    }
    return null;
}
function validateCommentInput(input) {
    const text = input.text.trim();
    if (text.length < LIMITS.commentMin || text.length > LIMITS.commentMax) {
        return validationError(`Comment must be ${LIMITS.commentMin}\u2013${LIMITS.commentMax} characters.`);
    }
    if ((input.authorName ?? "").trim().length > LIMITS.authorNameMax) {
        return validationError(`Name must be at most ${LIMITS.authorNameMax} characters.`);
    }
    return null;
}
function validateEmail(email) {
    return isEmail(email) ? null : validationError("Enter a valid email address.");
}
function isEmail(email) {
    return EMAIL_PATTERN.test(email.trim());
}
// src/client/client.ts
function createFewchursClient(options = {}) {
    const baseUrl = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/$/, "");
    const doFetch = options.fetch ?? globalThis.fetch?.bind(globalThis);
    const retries = options.retries ?? 1;
    const retryDelayMs = options.retryDelayMs ?? 250;
    if (options.apiKey && !options.apiKey.startsWith("fr_")) logOnce(BAD_KEY_PREFIX);
    function getDeviceId() {
        return typeof options.deviceId === "function" ? options.deviceId() : options.deviceId ?? null;
    }
    function headers(hasBody) {
        const result = {
            Accept: "application/json",
            "X-Fewchurs-Sdk": SDK_HEADER
        };
        if (hasBody) result["Content-Type"] = "application/json";
        if (options.apiKey) result.Authorization = `Bearer ${options.apiKey}`;
        const deviceId = getDeviceId();
        if (deviceId) result["X-Device-Id"] = deviceId;
        if (options.language) result["Accept-Language"] = options.language;
        if (options.appId) result["X-Fewchurs-App-Id"] = options.appId;
        return result;
    }
    function url(path, query) {
        const search = new URLSearchParams();
        for (const [key, value] of Object.entries(query ?? {})){
            if (value !== void 0 && value !== null && value !== "") search.set(key, String(value));
        }
        const qs = search.toString();
        return `${baseUrl}${path}${qs ? `?${qs}` : ""}`;
    }
    async function request(path, map, { method = "GET", body, query, signal } = {}) {
        if (!doFetch) return {
            ok: false,
            error: networkError("No fetch implementation available.")
        };
        if (!options.apiKey && options.baseUrl === void 0) {
            const failure = notConfiguredError();
            logError(failure);
            return {
                ok: false,
                error: failure
            };
        }
        const target = url(path, query);
        const init = {
            method,
            headers: headers(body !== void 0)
        };
        if (body !== void 0) init.body = JSON.stringify(body);
        if (signal) init.signal = signal;
        const attempts = method === "GET" ? retries + 1 : 1;
        for(let attempt = 0; attempt < attempts; attempt += 1){
            let response;
            try {
                response = await doFetch(target, init);
            } catch (error) {
                if (signal?.aborted) return {
                    ok: false,
                    error: networkError("Request aborted.")
                };
                if (attempt < attempts - 1) {
                    await delay(retryDelayMs);
                    continue;
                }
                const failure2 = networkError(messageOf(error));
                logError(failure2);
                return {
                    ok: false,
                    error: failure2
                };
            }
            if (response.ok) {
                const payload = await readJson(response);
                return {
                    ok: true,
                    data: map(payload)
                };
            }
            if (response.status >= 500 && attempt < attempts - 1) {
                await delay(retryDelayMs);
                continue;
            }
            const failure = errorFromResponse(response.status, await readJson(response));
            logError(failure);
            return {
                ok: false,
                error: failure
            };
        }
        return {
            ok: false,
            error: networkError()
        };
    }
    return {
        baseUrl,
        getDeviceId,
        getConfig: (signal)=>request("/config", normalizeConfig, {
                signal
            }),
        listFeatures: (params = {}, signal)=>request("/features", (body)=>normalizeFeaturePage(body, getDeviceId()), {
                query: {
                    sort: params.sort ?? "new",
                    limit: params.limit ?? DEFAULT_PAGE_SIZE,
                    cursor: params.cursor ?? void 0,
                    status: params.status?.length ? params.status.join(",") : void 0
                },
                signal
            }),
        getFeature: (featureId, signal)=>request(`/features/${encodeURIComponent(featureId)}`, (body)=>normalizeFeature(body, getDeviceId()), {
                signal
            }),
        submitFeature: async (input)=>{
            const invalid = validateFeatureInput(input);
            if (invalid) return {
                ok: false,
                error: invalid
            };
            return request("/features", (body)=>normalizeFeature(body, getDeviceId()), {
                method: "POST",
                body: {
                    title: input.title.trim(),
                    description: (input.description ?? "").trim(),
                    ...input.email ? {
                        email: input.email.trim()
                    } : {},
                    isSubscriber: input.isSubscriber ?? false
                }
            });
        },
        vote: (featureId)=>request(`/features/${encodeURIComponent(featureId)}/vote`, normalizeVote, {
                method: "POST"
            }),
        unvote: (featureId)=>request(`/features/${encodeURIComponent(featureId)}/vote`, normalizeVote, {
                method: "DELETE"
            }),
        follow: async (featureId, email)=>{
            const invalid = validateEmail(email);
            if (invalid) return {
                ok: false,
                error: invalid
            };
            return request(`/features/${encodeURIComponent(featureId)}/follow`, ()=>({
                    following: true
                }), {
                method: "POST",
                body: {
                    email: email.trim()
                }
            });
        },
        unfollow: (featureId)=>request(`/features/${encodeURIComponent(featureId)}/follow`, ()=>({
                    following: false
                }), {
                method: "DELETE"
            }),
        listComments: (featureId, params = {}, signal)=>request(`/features/${encodeURIComponent(featureId)}/comments`, (body)=>normalizeCommentPage(body, getDeviceId()), {
                query: {
                    limit: params.limit ?? DEFAULT_PAGE_SIZE,
                    cursor: params.cursor ?? void 0
                },
                signal
            }),
        // The server takes the feature id in the body here; POST /features/{id}/comments is a 405.
        createComment: async (input)=>{
            const invalid = validateCommentInput(input);
            if (invalid) return {
                ok: false,
                error: invalid
            };
            return request("/comments", (body)=>normalizeComment(body, getDeviceId()), {
                method: "POST",
                body: {
                    featureId: input.featureId,
                    text: input.text.trim(),
                    ...input.authorName?.trim() ? {
                        authorName: input.authorName.trim()
                    } : {}
                }
            });
        }
    };
}
async function readJson(response) {
    try {
        return await response.json();
    } catch  {
        return null;
    }
}
function delay(ms) {
    return ms > 0 ? new Promise((resolve)=>setTimeout(resolve, ms)) : Promise.resolve();
}
function messageOf(error) {
    return error instanceof Error ? error.message : "Network request failed.";
}
var INVALID_KEY_HELP = "Fewchurs rejected the API key. Check the key in your dashboard (Apps \u2192 API keys).";
var NOT_CONFIGURED_HELP = "Fewchurs is not configured. Pass apiKey to FewchursProvider, or set FEWCHURS_API_KEY on your server.";
var BAD_KEY_PREFIX = 'The Fewchurs API key should start with "fr_". Copy it from your dashboard.';
var loggedErrors = /* @__PURE__ */ new Set();
function logOnce(detail) {
    if (typeof process !== "undefined" && ("TURBOPACK compile-time value", "development") === "production") return;
    if (loggedErrors.has(detail)) return;
    loggedErrors.add(detail);
    console.warn(`[fewchurs] : ${detail}`);
}
function logError(error) {
    if (isNotConfigured(error)) return logOnce(NOT_CONFIGURED_HELP);
    const isInvalidKey = error.code === "invalid_key" && error.status === 401;
    logOnce(isInvalidKey ? INVALID_KEY_HELP : error.message);
}
// src/identity/deviceId.ts
var COOKIE_NAME = "fewchurs_did";
var STORAGE_KEY = "fewchurs_device_id";
var COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
function createDeviceId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
        return crypto.randomUUID();
    }
    return `fw-${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function readDeviceId() {
    if (typeof document === "undefined") return null;
    return readCookie() ?? readStorage();
}
function resolveDeviceId() {
    const existing = readDeviceId();
    if (existing) {
        persist(existing);
        return existing;
    }
    const created = createDeviceId();
    persist(created);
    return created;
}
function persist(deviceId) {
    if (typeof document === "undefined") return;
    try {
        document.cookie = `${COOKIE_NAME}=${encodeURIComponent(deviceId)}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
    } catch  {}
    try {
        localStorage.setItem(STORAGE_KEY, deviceId);
    } catch  {}
}
function readCookie() {
    const match = document.cookie.match(new RegExp(`(?:^|; )${COOKIE_NAME}=([^;]*)`));
    return match?.[1] ? decodeURIComponent(match[1]) : null;
}
function readStorage() {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch  {
        return null;
    }
}
// src/store/keys.ts
function listKey({ sort, status }) {
    return status?.length ? `${sort}:${[
        ...status
    ].sort().join(",")}` : sort;
}
function featureKey(featureId) {
    return `feature:${featureId}`;
}
// src/store/store.ts
var EMPTY_LIST = {
    features: [],
    cursor: null,
    status: "idle",
    error: null
};
var EMPTY_COMMENTS = {
    comments: [],
    cursor: null,
    status: "idle",
    error: null
};
var MAX_EMPTY_PAGES = 5;
function createStore(client, { pageSize = 20, initialState, onEvent } = {}) {
    let state = {
        config: initialState?.config ?? null,
        lists: initialState?.lists ?? {},
        comments: initialState?.comments ?? {}
    };
    const listeners = /* @__PURE__ */ new Set();
    const inFlight = /* @__PURE__ */ new Map();
    function setState(next) {
        state = {
            ...state,
            ...next
        };
        for (const listener of listeners)listener();
    }
    function setList(key, patch) {
        const current = state.lists[key] ?? EMPTY_LIST;
        setState({
            lists: {
                ...state.lists,
                [key]: {
                    ...current,
                    ...patch
                }
            }
        });
    }
    function setComments(featureId, patch) {
        const current = state.comments[featureId] ?? EMPTY_COMMENTS;
        setState({
            comments: {
                ...state.comments,
                [featureId]: {
                    ...current,
                    ...patch
                }
            }
        });
    }
    function emit(event) {
        onEvent?.(event);
    }
    function fail(error) {
        emit({
            name: "error",
            error
        });
    }
    function dedupe(key, run) {
        const existing = inFlight.get(key);
        if (existing) return existing;
        const promise = run().finally(()=>inFlight.delete(key));
        inFlight.set(key, promise);
        return promise;
    }
    function mapFeature(featureId, update) {
        const lists = {};
        let changed = false;
        for (const [key, list] of Object.entries(state.lists)){
            const index = list.features.findIndex((feature)=>feature.id === featureId);
            if (index === -1) {
                lists[key] = list;
                continue;
            }
            changed = true;
            const features = [
                ...list.features
            ];
            features[index] = update(features[index]);
            lists[key] = {
                ...list,
                features
            };
        }
        if (changed) setState({
            lists
        });
    }
    async function fetchFeatures(query, append, size) {
        const key = listKey(query);
        const current = state.lists[key] ?? EMPTY_LIST;
        if (append && !current.cursor) return;
        setList(key, {
            status: append ? "loadingMore" : "loading",
            error: null
        });
        const result = await client.listFeatures({
            sort: query.sort,
            status: query.status,
            limit: size,
            cursor: append ? current.cursor : null
        });
        if (!result.ok) {
            setList(key, {
                status: "error",
                error: result.error
            });
            fail(result.error);
            return;
        }
        const previous = append ? state.lists[key]?.features ?? [] : [];
        setList(key, {
            features: dedupeById([
                ...previous,
                ...result.data.features
            ]),
            cursor: result.data.nextCursor,
            status: "ready",
            error: null
        });
    }
    async function fetchFeature(featureId) {
        const key = featureKey(featureId);
        setList(key, {
            status: "loading",
            error: null
        });
        const result = await client.getFeature(featureId);
        if (!result.ok) {
            setList(key, {
                status: "error",
                error: result.error
            });
            fail(result.error);
            return;
        }
        setList(key, {
            features: [
                result.data
            ],
            cursor: null,
            status: "ready",
            error: null
        });
    }
    async function fetchComments(featureId, append) {
        const current = state.comments[featureId] ?? EMPTY_COMMENTS;
        if (append && !current.cursor) return;
        setComments(featureId, {
            status: append ? "loadingMore" : "loading",
            error: null
        });
        let cursor = append ? current.cursor : null;
        const collected = [];
        for(let page = 0; page < MAX_EMPTY_PAGES; page += 1){
            const result = await client.listComments(featureId, {
                limit: pageSize,
                cursor
            });
            if (!result.ok) {
                setComments(featureId, {
                    status: "error",
                    error: result.error
                });
                fail(result.error);
                return;
            }
            collected.push(...result.data.comments);
            cursor = result.data.nextCursor;
            if (collected.length > 0 || !cursor) break;
        }
        const previous = append ? state.comments[featureId]?.comments ?? [] : [];
        setComments(featureId, {
            comments: dedupeById([
                ...previous,
                ...collected
            ]),
            cursor,
            status: "ready",
            error: null
        });
    }
    return {
        subscribe (listener) {
            listeners.add(listener);
            return ()=>listeners.delete(listener);
        },
        getState: ()=>state,
        emit,
        ensureConfig () {
            if (state.config) return;
            void dedupe("config", async ()=>{
                const result = await client.getConfig();
                if (result.ok) setState({
                    config: result.data
                });
            });
        },
        ensureFeatures (query, size = pageSize) {
            const key = listKey(query);
            if ((state.lists[key] ?? EMPTY_LIST).status !== "idle") return;
            void dedupe(`features:${key}`, ()=>fetchFeatures(query, false, size));
        },
        refresh (query, size = pageSize) {
            return dedupe(`features:${listKey(query)}`, ()=>fetchFeatures(query, false, size));
        },
        loadMore (query, size = pageSize) {
            return dedupe(`features:more:${listKey(query)}`, ()=>fetchFeatures(query, true, size));
        },
        ensureFeature (featureId) {
            if ((state.lists[featureKey(featureId)] ?? EMPTY_LIST).status !== "idle") return;
            void dedupe(`feature:${featureId}`, ()=>fetchFeature(featureId));
        },
        refreshFeature (featureId) {
            return dedupe(`feature:${featureId}`, ()=>fetchFeature(featureId));
        },
        ensureComments (featureId) {
            if ((state.comments[featureId] ?? EMPTY_COMMENTS).status !== "idle") return;
            void dedupe(`comments:${featureId}`, ()=>fetchComments(featureId, false));
        },
        refreshComments (featureId) {
            return dedupe(`comments:${featureId}`, ()=>fetchComments(featureId, false));
        },
        loadMoreComments (featureId) {
            return dedupe(`comments:more:${featureId}`, ()=>fetchComments(featureId, true));
        },
        async toggleVote (featureId) {
            const before = findFeature(state, featureId);
            if (!before) return {
                ok: false,
                error: {
                    code: "not_found",
                    status: 404,
                    message: "Unknown feature."
                }
            };
            const nextVoted = !before.hasVoted;
            mapFeature(featureId, (feature)=>({
                    ...feature,
                    hasVoted: nextVoted,
                    upvoteCount: Math.max(0, feature.upvoteCount + (nextVoted ? 1 : -1))
                }));
            const result = nextVoted ? await client.vote(featureId) : await client.unvote(featureId);
            if (!result.ok) {
                mapFeature(featureId, (feature)=>({
                        ...feature,
                        hasVoted: before.hasVoted,
                        upvoteCount: before.upvoteCount
                    }));
                fail(result.error);
                return result;
            }
            mapFeature(featureId, (feature)=>({
                    ...feature,
                    hasVoted: result.data.hasVoted,
                    upvoteCount: result.data.upvoteCount
                }));
            emit({
                name: "voted",
                featureId,
                hasVoted: result.data.hasVoted
            });
            return result;
        },
        async submitFeature (input) {
            const result = await client.submitFeature(input);
            if (!result.ok) {
                fail(result.error);
                return result;
            }
            const lists = {};
            for (const [key, list] of Object.entries(state.lists)){
                lists[key] = key.startsWith("new") ? {
                    ...list,
                    features: dedupeById([
                        result.data,
                        ...list.features
                    ])
                } : list;
            }
            setState({
                lists
            });
            emit({
                name: "featureSubmitted",
                featureId: result.data.id
            });
            return result;
        },
        async addComment (input) {
            const result = await client.createComment(input);
            if (!result.ok) {
                fail(result.error);
                return result;
            }
            const current = state.comments[input.featureId] ?? EMPTY_COMMENTS;
            setComments(input.featureId, {
                comments: [
                    ...current.comments,
                    result.data
                ]
            });
            mapFeature(input.featureId, (feature)=>({
                    ...feature,
                    commentCount: feature.commentCount + 1
                }));
            emit({
                name: "commented",
                featureId: input.featureId
            });
            return result;
        },
        async setFollowing (featureId, email) {
            const result = email ? await client.follow(featureId, email) : await client.unfollow(featureId);
            if (!result.ok) {
                fail(result.error);
                return result;
            }
            mapFeature(featureId, (feature)=>({
                    ...feature,
                    isFollowing: result.data.following,
                    followerCount: Math.max(0, feature.followerCount + (result.data.following ? 1 : -1))
                }));
            emit({
                name: "followed",
                featureId,
                following: result.data.following
            });
            return result;
        }
    };
}
function listStateOf(state, key) {
    return state.lists[key] ?? EMPTY_LIST;
}
function commentsStateOf(state, featureId) {
    return state.comments[featureId] ?? EMPTY_COMMENTS;
}
function findFeature(state, featureId) {
    for (const list of Object.values(state.lists)){
        const found = list.features.find((feature)=>feature.id === featureId);
        if (found) return found;
    }
    return null;
}
function dedupeById(items) {
    const seen = /* @__PURE__ */ new Set();
    const result = [];
    for (const item of items){
        if (seen.has(item.id)) continue;
        seen.add(item.id);
        result.push(item);
    }
    return result;
}
;
var FewchursContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function FewchursProvider({ apiKey, baseUrl, deviceId: deviceIdProp, language, pageSize = 20, initialState, onEvent, client: clientProp, children }) {
    const [deviceId, setDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>deviceIdProp ?? readDeviceId());
    const deviceIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(deviceId);
    deviceIdRef.current = deviceIdProp ?? deviceId;
    const eventRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(onEvent);
    eventRef.current = onEvent;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (deviceIdProp) return;
        setDeviceId(resolveDeviceId());
    }, [
        deviceIdProp
    ]);
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>clientProp ?? createFewchursClient({
            apiKey,
            baseUrl,
            language,
            deviceId: ()=>deviceIdRef.current
        }), [
        clientProp,
        apiKey,
        baseUrl,
        language
    ]);
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>createStore(client, {
            pageSize,
            initialState,
            onEvent: (event)=>eventRef.current?.(event)
        }), // initialState is a first-paint seed; a new object identity must not wipe live state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        client,
        pageSize
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            client,
            store,
            deviceId: deviceIdProp ?? deviceId,
            isReady: Boolean(deviceIdProp ?? deviceId) || !apiKey
        }), [
        client,
        store,
        deviceIdProp,
        deviceId,
        apiKey
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FewchursContext.Provider, {
        value,
        children
    });
}
function useFewchurs() {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(FewchursContext);
    if (!value) {
        throw new Error("Fewchurs components must be rendered inside <FewchursProvider>. In Next.js, <FewchursBoard> from @fewchurs/next provides one for you.");
    }
    return value;
}
;
;
;
function useStoreState() {
    const { store } = useFewchurs();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(store.subscribe, store.getState, store.getState);
}
// src/hooks/useFewchursConfig.ts
function useFewchursConfig() {
    const { store } = useFewchurs();
    const state = useStoreState();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        store.ensureConfig();
    }, [
        store
    ]);
    return {
        showBranding: state.config?.showBranding ?? false,
        hideVoteCounts: state.config?.hideVoteCounts ?? false,
        appName: state.config?.appName ?? null,
        isLoading: state.config === null
    };
}
;
// src/components/labels.ts
var DEFAULT_LABELS = {
    title: "Feature requests",
    tabTop: "Top",
    tabNew: "New",
    tabRoadmap: "Roadmap",
    newRequest: "New request",
    cancel: "Cancel",
    submit: "Submit request",
    submitting: "Submitting\u2026",
    submitted: "Thanks \u2014 your request is in.",
    fieldTitle: "Title",
    fieldTitlePlaceholder: "Add dark mode",
    fieldDescription: "Details",
    fieldDescriptionPlaceholder: "What would this let you do?",
    fieldEmail: "Email",
    fieldEmailHint: "Only used to tell you when this ships.",
    fieldName: "Your name",
    emptyTitle: "No feature requests yet",
    emptyBody: "Be the first to suggest something.",
    loading: "Loading\u2026",
    loadMore: "Load more",
    retry: "Try again",
    errorInvalidKeyTitle: "Invalid API key",
    errorInvalidKeyDetail: "Copy the key from your Fewchurs dashboard (Apps \u2192 API keys) and pass it to FewchursProvider, or set FEWCHURS_API_KEY on your server.",
    errorWrongAppTitle: "Invalid API key",
    errorWrongAppDetail: "",
    errorTitle: "Couldn't load requests",
    errorDetail: "Something went wrong. Try again.",
    errorOfflineTitle: "You're offline",
    errorOfflineDetail: "Check your connection and try again.",
    errorNotSetUpTitle: "Fewchurs isn't set up",
    errorNotSetUpDetail: "Pass apiKey to FewchursProvider, or set FEWCHURS_API_KEY on your server.",
    errorLoadMore: "Couldn't load more.",
    errorComments: "Couldn't load comments.",
    fieldTitleTooShort: "At least 3 characters.",
    fieldEmailInvalid: "Enter a valid email address.",
    comments: "Comments",
    commentPlaceholder: "Add a comment",
    postComment: "Post",
    noComments: "No comments yet.",
    follow: "Notify me",
    following: "You'll be notified",
    followPlaceholder: "you@example.com",
    developer: "Team",
    poweredBy: "Powered by Fewchurs",
    upvote: "Upvote",
    status: {
        open: "Open",
        planned: "Planned",
        in_progress: "In progress",
        done: "Done",
        declined: "Declined",
        unknown: "Open"
    }
};
function mergeLabels(overrides) {
    if (!overrides) return DEFAULT_LABELS;
    return {
        ...DEFAULT_LABELS,
        ...overrides,
        status: {
            ...DEFAULT_LABELS.status,
            ...overrides.status
        }
    };
}
// src/components/BoardContext.tsx
var BoardContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
var BoardContextProvider = BoardContext.Provider;
function useBoard() {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(BoardContext);
    if (!value) {
        throw new Error("Fewchurs board parts must be rendered inside <FewchursBoard.Root>.");
    }
    return value;
}
function makeClassName(unstyled) {
    return (...names)=>unstyled ? void 0 : names.filter(Boolean).join(" ");
}
;
function Branding() {
    const { labels, cx } = useBoard();
    const { showBranding } = useFewchursConfig();
    if (!showBranding) return null;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
        className: cx("fw-branding"),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("a", {
            className: cx("fw-link"),
            href: "https://www.fewchurs.com",
            target: "_blank",
            rel: "noreferrer noopener",
            children: labels.poweredBy
        })
    });
}
;
function useFeature(featureId, { enabled = true } = {}) {
    const { store, isReady } = useFewchurs();
    const state = useStoreState();
    const active = Boolean(featureId) && enabled;
    const list = listStateOf(state, featureKey(featureId ?? ""));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!active || !isReady || !featureId) return;
        store.ensureFeature(featureId);
    }, [
        store,
        featureId,
        active,
        isReady
    ]);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>featureId ? store.refreshFeature(featureId) : Promise.resolve(), [
        store,
        featureId
    ]);
    return {
        feature: list.features[0] ?? null,
        isLoading: active && (list.status === "loading" || list.status === "idle"),
        error: list.error,
        refresh
    };
}
;
function useFeatures({ sort = "new", status, pageSize, enabled = true } = {}) {
    const { store, isReady } = useFewchurs();
    const state = useStoreState();
    const statusKey = status?.length ? [
        ...status
    ].sort().join(",") : "";
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            sort,
            status: statusKey ? statusKey.split(",") : void 0
        }), [
        sort,
        statusKey
    ]);
    const key = listKey(query);
    const list = listStateOf(state, key);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!enabled || !isReady) return;
        store.ensureFeatures(query, pageSize);
    }, [
        store,
        query,
        pageSize,
        enabled,
        isReady
    ]);
    const loadMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>store.loadMore(query, pageSize), [
        store,
        query,
        pageSize
    ]);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>store.refresh(query, pageSize), [
        store,
        query,
        pageSize
    ]);
    return {
        features: list.features,
        isLoading: list.status === "loading" || list.status === "idle" && enabled,
        isLoadingMore: list.status === "loadingMore",
        error: list.error,
        hasMore: list.cursor !== null,
        loadMore,
        refresh
    };
}
;
function useFollow(featureId) {
    const { store } = useFewchurs();
    const state = useStoreState();
    const [isPending, setIsPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const feature = Object.values(state.lists).flatMap((list)=>list.features).find((candidate)=>candidate.id === featureId);
    const run = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (email)=>{
        setIsPending(true);
        setError(null);
        const result = await store.setFollowing(featureId, email);
        if (!result.ok) setError(result.error);
        setIsPending(false);
        return result.ok;
    }, [
        store,
        featureId
    ]);
    return {
        isFollowing: feature?.isFollowing ?? false,
        isPending,
        error,
        follow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((email)=>run(email), [
            run
        ]),
        unfollow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>run(null), [
            run
        ])
    };
}
;
function useVote(featureId) {
    const { store } = useFewchurs();
    const state = useStoreState();
    const [isPending, setIsPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const feature = Object.values(state.lists).flatMap((list)=>list.features).find((candidate)=>candidate.id === featureId);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setIsPending(true);
        setError(null);
        const result = await store.toggleVote(featureId);
        if (!result.ok) setError(result.error);
        setIsPending(false);
    }, [
        store,
        featureId
    ]);
    const vote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (feature?.hasVoted) return;
        await toggle();
    }, [
        feature?.hasVoted,
        toggle
    ]);
    const unvote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!feature?.hasVoted) return;
        await toggle();
    }, [
        feature?.hasVoted,
        toggle
    ]);
    return {
        hasVoted: feature?.hasVoted ?? false,
        upvoteCount: feature?.upvoteCount ?? 0,
        isPending,
        error,
        toggle,
        vote,
        unvote
    };
}
;
;
;
function useComments(featureId, { enabled = true } = {}) {
    const { store, isReady } = useFewchurs();
    const state = useStoreState();
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const comments = commentsStateOf(state, featureId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!enabled || !isReady) return;
        store.ensureComments(featureId);
    }, [
        store,
        featureId,
        enabled,
        isReady
    ]);
    const loadMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>store.loadMoreComments(featureId), [
        store,
        featureId
    ]);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>store.refreshComments(featureId), [
        store,
        featureId
    ]);
    const add = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (text, authorName)=>{
        setIsSubmitting(true);
        setSubmitError(null);
        const result = await store.addComment({
            featureId,
            text,
            authorName
        });
        if (!result.ok) setSubmitError(result.error);
        setIsSubmitting(false);
        return result.ok;
    }, [
        store,
        featureId
    ]);
    return {
        comments: comments.comments,
        isLoading: comments.status === "loading" || comments.status === "idle" && enabled,
        isLoadingMore: comments.status === "loadingMore",
        isSubmitting,
        error: comments.error,
        submitError,
        hasMore: comments.cursor !== null,
        loadMore,
        refresh,
        add
    };
}
// src/components/time.ts
var FORMATTER = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    timeZone: "UTC"
});
function formatDate(iso) {
    const date = new Date(iso);
    return Number.isNaN(date.getTime()) ? "" : FORMATTER.format(date);
}
;
function CommentList({ featureId }) {
    const { labels, cx } = useBoard();
    const { comments, isLoading, isLoadingMore, error, hasMore, loadMore, refresh } = useComments(featureId);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: cx("fw-comments"),
        children: [
            isLoading && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: cx("fw-muted"),
                children: labels.loading
            }),
            error && comments.length === 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-empty", "fw-empty--compact"),
                role: "alert",
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        className: cx("fw-empty__title"),
                        children: labels.errorComments
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        className: cx("fw-empty__detail"),
                        children: isNotConfigured(error) ? labels.errorNotSetUpTitle : userMessage(error)
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                        type: "button",
                        className: cx("fw-btn-text"),
                        onClick: ()=>void refresh(),
                        children: labels.retry
                    })
                ]
            }),
            error && comments.length > 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: cx("fw-error"),
                role: "alert",
                children: userMessage(error)
            }),
            !isLoading && !error && comments.length === 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: cx("fw-muted"),
                children: labels.noComments
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("ul", {
                className: cx("fw-comment-list"),
                children: comments.map((comment)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("li", {
                        className: cx("fw-comment"),
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                className: cx("fw-comment__author"),
                                children: comment.authorName
                            }),
                            comment.isDeveloper && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                className: cx("fw-badge"),
                                children: [
                                    " ",
                                    labels.developer
                                ]
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                className: cx("fw-muted"),
                                children: [
                                    " \xB7 ",
                                    formatDate(comment.createdAt)
                                ]
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                className: cx("fw-comment__text"),
                                children: comment.text
                            })
                        ]
                    }, comment.id))
            }),
            hasMore && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                type: "button",
                className: cx("fw-btn", "fw-btn--ghost"),
                disabled: isLoadingMore,
                onClick: ()=>void loadMore(),
                children: isLoadingMore ? labels.loading : labels.loadMore
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CommentForm, {
                featureId
            })
        ]
    });
}
function CommentForm({ featureId }) {
    const { labels, cx } = useBoard();
    const { add, isSubmitting, submitError } = useComments(featureId);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [authorName, setAuthorName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("form", {
        className: cx("fw-form", "fw-form--inline"),
        onSubmit: async (event)=>{
            event.preventDefault();
            const posted = await add(text, authorName);
            if (posted) setText("");
        },
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-field"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("label", {
                        className: cx("fw-sr-only"),
                        htmlFor: `fw-comment-${featureId}`,
                        children: labels.commentPlaceholder
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
                        id: `fw-comment-${featureId}`,
                        className: cx("fw-input"),
                        value: text,
                        maxLength: LIMITS.commentMax,
                        placeholder: labels.commentPlaceholder,
                        onChange: (event)=>setText(event.target.value),
                        required: true
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-field"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("label", {
                        className: cx("fw-sr-only"),
                        htmlFor: `fw-comment-name-${featureId}`,
                        children: labels.fieldName
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
                        id: `fw-comment-name-${featureId}`,
                        className: cx("fw-input"),
                        value: authorName,
                        maxLength: LIMITS.authorNameMax,
                        placeholder: labels.fieldName,
                        onChange: (event)=>setAuthorName(event.target.value)
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                type: "submit",
                className: cx("fw-btn"),
                disabled: isSubmitting || !text.trim(),
                children: labels.postComment
            }),
            submitError && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: cx("fw-error"),
                role: "alert",
                children: userMessage(submitError)
            })
        ]
    });
}
;
;
function FollowForm({ feature }) {
    const { labels, userEmail, cx } = useBoard();
    const { isFollowing, isPending, error, follow, unfollow } = useFollow(feature.id);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(userEmail ?? "");
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (isFollowing) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                    type: "button",
                    className: cx("fw-link"),
                    disabled: isPending,
                    onClick: ()=>void unfollow(),
                    children: labels.following
                }),
                error && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    className: cx("fw-error"),
                    role: "alert",
                    children: userMessage(error)
                })
            ]
        });
    }
    if (!isOpen) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
            type: "button",
            className: cx("fw-link"),
            onClick: ()=>setIsOpen(true),
            children: labels.follow
        });
    }
    const isEmailValid = EMAIL_PATTERN.test(email.trim());
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("form", {
        className: cx("fw-form", "fw-form--inline"),
        onSubmit: async (event)=>{
            event.preventDefault();
            const ok = await follow(email);
            if (ok) setIsOpen(false);
        },
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("label", {
                className: cx("fw-sr-only"),
                htmlFor: `fw-follow-${feature.id}`,
                children: labels.fieldEmail
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
                id: `fw-follow-${feature.id}`,
                className: cx("fw-input"),
                type: "email",
                value: email,
                placeholder: labels.followPlaceholder,
                onChange: (event)=>setEmail(event.target.value),
                required: true
            }),
            email !== "" && !isEmailValid && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: cx("fw-error"),
                children: labels.fieldEmailInvalid
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                type: "submit",
                className: cx("fw-btn"),
                disabled: isPending || !isEmailValid,
                children: labels.follow
            }),
            error && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: cx("fw-error"),
                role: "alert",
                children: userMessage(error)
            })
        ]
    });
}
;
function StatusBadge({ status }) {
    const { labels, cx } = useBoard();
    if (status === "open" || status === "unknown") return null;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
        className: cx("fw-status", `fw-status--${status}`),
        children: labels.status[status]
    });
}
;
function VoteButton({ feature, isPending, onToggle }) {
    const { labels, hideVoteCounts, cx } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
        type: "button",
        className: cx("fw-vote"),
        "aria-pressed": feature.hasVoted,
        "aria-label": `${labels.upvote} ${feature.title}`,
        disabled: isPending,
        onClick: onToggle,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: cx("fw-vote__arrow"),
                "aria-hidden": "true",
                children: "\u25B2"
            }),
            !hideVoteCounts && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: cx("fw-vote__count"),
                children: feature.upvoteCount
            })
        ]
    });
}
;
function FeatureCard({ feature, defaultCommentsOpen = false }) {
    const { labels, allowComments, cx } = useBoard();
    const { isPending, toggle, error: voteError } = useVote(feature.id);
    const [showComments, setShowComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultCommentsOpen);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("li", {
        className: cx("fw-card"),
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(VoteButton, {
                feature,
                isPending,
                onToggle: ()=>void toggle()
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-card__body"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                        className: cx("fw-card__title"),
                        children: feature.title
                    }),
                    feature.description && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        className: cx("fw-card__desc"),
                        children: feature.description
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: cx("fw-meta"),
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(StatusBadge, {
                                status: feature.status
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                children: formatDate(feature.createdAt)
                            }),
                            allowComments && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("button", {
                                type: "button",
                                className: cx("fw-link"),
                                "aria-expanded": showComments,
                                "aria-controls": `fw-comments-${feature.id}`,
                                onClick: ()=>setShowComments((open)=>!open),
                                children: [
                                    labels.comments,
                                    " (",
                                    feature.commentCount,
                                    ")"
                                ]
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FollowForm, {
                                feature
                            })
                        ]
                    }),
                    voteError && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        className: cx("fw-error"),
                        role: "alert",
                        children: userMessage(voteError)
                    }),
                    allowComments && showComments && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        id: `fw-comments-${feature.id}`,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(CommentList, {
                            featureId: feature.id
                        })
                    })
                ]
            })
        ]
    });
}
;
var ROW_COUNT = 3;
var ROADMAP_ROW_COUNT = 2;
function FeatureListSkeleton({ roadmap = false, rows = ROW_COUNT }) {
    const { labels, cx } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: cx("fw-skeleton"),
        role: "status",
        "aria-busy": "true",
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: cx("fw-sr-only"),
                children: labels.loading
            }),
            roadmap ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: cx("fw-roadmap"),
                "aria-hidden": "true",
                children: ROADMAP_STATUSES.map((status)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: cx("fw-roadmap__column"),
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Bar, {
                                width: "40%"
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Rows, {
                                count: ROADMAP_ROW_COUNT
                            })
                        ]
                    }, status))
            }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Rows, {
                    count: rows
                })
            })
        ]
    });
}
function Rows({ count }) {
    const { cx } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: cx("fw-list"),
        children: Array.from({
            length: count
        }, (_, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-card", "fw-skeleton__card"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: cx("fw-skeleton__vote")
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: cx("fw-card__body"),
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Bar, {
                                width: "62%"
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Bar, {
                                width: "88%",
                                height: "0.6rem"
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Bar, {
                                width: "34%",
                                height: "0.6rem"
                            })
                        ]
                    })
                ]
            }, index))
    });
}
function Bar({ width, height }) {
    const { cx } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: cx("fw-skeleton__bar"),
        style: {
            width,
            height
        }
    });
}
;
function errorCopy(error, labels) {
    if (isNotConfigured(error)) {
        return {
            title: labels.errorNotSetUpTitle,
            detail: labels.errorNotSetUpDetail
        };
    }
    if (error.code === "network") {
        return {
            title: labels.errorOfflineTitle,
            detail: labels.errorOfflineDetail
        };
    }
    if (isWrongApp(error)) {
        return {
            title: labels.errorWrongAppTitle,
            detail: labels.errorWrongAppDetail || userMessage(error)
        };
    }
    if (error.code === "invalid_key") {
        return {
            title: labels.errorInvalidKeyTitle,
            detail: labels.errorInvalidKeyDetail
        };
    }
    return {
        title: labels.errorTitle,
        detail: error.code === "server" ? labels.errorDetail : userMessage(error)
    };
}
function FeatureList() {
    const { initialFeatureId } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            initialFeatureId && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(PinnedFeature, {
                featureId: initialFeatureId
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Listing, {
                excludeId: initialFeatureId
            })
        ]
    });
}
function PinnedFeature({ featureId }) {
    const { cx } = useBoard();
    const { feature, isLoading, error } = useFeature(featureId);
    if (isLoading) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FeatureListSkeleton, {
        rows: 1
    });
    if (!feature && error) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
            className: cx("fw-error", "fw-pinned"),
            role: "alert",
            children: userMessage(error)
        });
    }
    if (!feature) return null;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: cx("fw-pinned"),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("ul", {
            className: cx("fw-list"),
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FeatureCard, {
                feature,
                defaultCommentsOpen: true
            })
        })
    });
}
function Listing({ excludeId }) {
    const { tab, showDeclined, labels, cx, renderEmpty, pageSize } = useBoard();
    const sort = tab === "roadmap" ? "top" : tab;
    const isRoadmap = tab === "roadmap";
    const { features, isLoading, isLoadingMore, error, hasMore, loadMore, refresh } = useFeatures({
        sort,
        status: isRoadmap ? ROADMAP_STATUSES : void 0,
        pageSize
    });
    const visible = features.filter((feature)=>{
        if (feature.id === excludeId) return false;
        if (isRoadmap) return ROADMAP_STATUSES.includes(feature.status);
        return showDeclined || feature.status !== "declined";
    });
    if (error && visible.length === 0) {
        const { title, detail } = errorCopy(error, labels);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: cx("fw-empty"),
            role: "alert",
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    className: cx("fw-empty__title"),
                    children: title
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    className: cx("fw-empty__detail"),
                    children: detail
                }),
                !isNotConfigured(error) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                    type: "button",
                    className: cx("fw-btn-text"),
                    onClick: ()=>void refresh(),
                    children: labels.retry
                })
            ]
        });
    }
    if (isLoading && visible.length === 0) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FeatureListSkeleton, {
            roadmap: isRoadmap
        });
    }
    if (visible.length === 0) {
        if (renderEmpty) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: renderEmpty()
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: cx("fw-empty"),
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    className: cx("fw-empty__title"),
                    children: labels.emptyTitle
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    children: labels.emptyBody
                })
            ]
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isRoadmap ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(RoadmapColumns, {
                features: visible
            }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Rows2, {
                features: visible
            }),
            hasMore && error && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-pagination"),
                role: "alert",
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                        children: labels.errorLoadMore
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                        type: "button",
                        className: cx("fw-btn-text"),
                        onClick: ()=>void loadMore(),
                        children: labels.retry
                    })
                ]
            }),
            hasMore && !error && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: cx("fw-pagination"),
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                    type: "button",
                    className: cx("fw-btn", "fw-btn--ghost"),
                    disabled: isLoadingMore,
                    onClick: ()=>void loadMore(),
                    children: isLoadingMore ? labels.loading : labels.loadMore
                })
            })
        ]
    });
}
function Rows2({ features }) {
    const { cx } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("ul", {
        className: cx("fw-list"),
        children: features.map((feature)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FeatureRow, {
                feature
            }, feature.id))
    });
}
function RoadmapColumns({ features }) {
    const { labels, cx } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: cx("fw-roadmap"),
        children: ROADMAP_STATUSES.map((status)=>{
            const column = features.filter((feature)=>feature.status === status);
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("section", {
                className: cx("fw-roadmap__column"),
                "aria-label": labels.status[status],
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                        className: cx("fw-roadmap__heading"),
                        children: labels.status[status]
                    }),
                    column.length === 0 ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        className: cx("fw-muted"),
                        children: "\u2014"
                    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("ul", {
                        className: cx("fw-list"),
                        children: column.map((feature)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FeatureRow, {
                                feature
                            }, feature.id))
                    })
                ]
            }, status);
        })
    });
}
function FeatureRow({ feature }) {
    const { renderFeature } = useBoard();
    if (!renderFeature) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FeatureCard, {
        feature
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FeatureSlot, {
        feature
    });
}
function FeatureSlot({ feature }) {
    const { renderFeature } = useBoard();
    const { toggle } = useVote(feature.id);
    const { follow, unfollow } = useFollow(feature.id);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: renderFeature?.(feature, {
            toggleVote: toggle,
            follow,
            unfollow
        })
    });
}
;
;
function useSubmitFeature() {
    const { store } = useFewchurs();
    const [isPending, setIsPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const submit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (input)=>{
        setIsPending(true);
        setError(null);
        const result = await store.submitFeature(input);
        setIsPending(false);
        if (!result.ok) {
            setError(result.error);
            return null;
        }
        return result.data;
    }, [
        store
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setError(null), []);
    return {
        submit,
        isPending,
        error,
        reset
    };
}
;
function SubmitForm() {
    const { labels, emailField, userEmail, isSubscriber, setFormOpen, setJustSubmitted, cx } = useBoard();
    const { submit, isPending, error } = useSubmitFeature();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(userEmail ?? "");
    const isTitleValid = title.trim().length >= LIMITS.titleMin;
    const isEmailInvalid = emailField !== "off" && email !== "" && !EMAIL_PATTERN.test(email.trim());
    const isEmailMissing = emailField === "required" && !email.trim();
    const canSubmit = isTitleValid && !isEmailInvalid && !isEmailMissing;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("form", {
        className: cx("fw-form"),
        onSubmit: async (event)=>{
            event.preventDefault();
            const created = await submit({
                title,
                description,
                ...emailField !== "off" && email ? {
                    email
                } : {},
                isSubscriber
            });
            if (!created) return;
            setTitle("");
            setDescription("");
            setJustSubmitted(true);
            setFormOpen(false);
        },
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-field"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("label", {
                        className: cx("fw-label"),
                        htmlFor: "fw-title",
                        children: labels.fieldTitle
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
                        id: "fw-title",
                        className: cx("fw-input"),
                        value: title,
                        minLength: LIMITS.titleMin,
                        maxLength: LIMITS.titleMax,
                        placeholder: labels.fieldTitlePlaceholder,
                        onChange: (event)=>setTitle(event.target.value),
                        required: true
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: cx("fw-field__foot"),
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                className: cx("fw-error"),
                                children: title !== "" && !isTitleValid ? labels.fieldTitleTooShort : ""
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                className: cx("fw-muted"),
                                children: [
                                    title.length,
                                    "/",
                                    LIMITS.titleMax
                                ]
                            })
                        ]
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-field"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("label", {
                        className: cx("fw-label"),
                        htmlFor: "fw-description",
                        children: labels.fieldDescription
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("textarea", {
                        id: "fw-description",
                        className: cx("fw-input", "fw-textarea"),
                        value: description,
                        maxLength: LIMITS.descriptionMax,
                        placeholder: labels.fieldDescriptionPlaceholder,
                        onChange: (event)=>setDescription(event.target.value)
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: cx("fw-field__foot"),
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("span", {}),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                className: cx("fw-muted"),
                                children: [
                                    description.length,
                                    "/",
                                    LIMITS.descriptionMax
                                ]
                            })
                        ]
                    })
                ]
            }),
            emailField !== "off" && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-field"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("label", {
                        className: cx("fw-label"),
                        htmlFor: "fw-email",
                        children: labels.fieldEmail
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("input", {
                        id: "fw-email",
                        className: cx("fw-input"),
                        type: "email",
                        value: email,
                        placeholder: labels.followPlaceholder,
                        "aria-describedby": "fw-email-hint",
                        onChange: (event)=>setEmail(event.target.value),
                        required: emailField === "required"
                    }),
                    isEmailInvalid ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        id: "fw-email-hint",
                        className: cx("fw-error"),
                        children: labels.fieldEmailInvalid
                    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        id: "fw-email-hint",
                        className: cx("fw-muted"),
                        children: labels.fieldEmailHint
                    })
                ]
            }),
            error && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: cx("fw-error"),
                role: "alert",
                children: userMessage(error)
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-form__actions"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                        type: "submit",
                        className: cx("fw-btn"),
                        disabled: isPending || !canSubmit,
                        children: isPending ? labels.submitting : labels.submit
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                        type: "button",
                        className: cx("fw-btn", "fw-btn--ghost"),
                        onClick: ()=>setFormOpen(false),
                        children: labels.cancel
                    })
                ]
            })
        ]
    });
}
// src/components/theme.ts
var VARIABLE_BY_KEY = {
    primary: "--fw-primary",
    radius: "--fw-radius",
    surface: "--fw-surface",
    border: "--fw-border",
    text: "--fw-text",
    subtle: "--fw-subtle",
    font: "--fw-font"
};
function themeToStyle(theme) {
    if (!theme) return void 0;
    const style = {};
    for (const [key, value] of Object.entries(theme)){
        if (value === void 0 || value === null) continue;
        const variable = VARIABLE_BY_KEY[key];
        style[variable] = typeof value === "number" ? `${value}px` : value;
    }
    return style;
}
;
var DEFAULT_TABS = [
    "top",
    "new"
];
function BoardRoot({ tabs = DEFAULT_TABS, defaultTab, initialFeatureId, showDeclined = false, allowComments = true, emailField = "optional", pageSize, labels, theme, unstyled = false, colorScheme = "system", className, style, userEmail, isSubscriber = false, renderHeader, renderEmpty, renderFeature, children }) {
    const { store } = useFewchurs();
    const { hideVoteCounts } = useFewchursConfig();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultTab ?? tabs[0] ?? "top");
    const [isFormOpen, setFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [justSubmitted, setJustSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        store.emit({
            name: "boardOpened"
        });
    }, [
        store
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            labels: mergeLabels(labels),
            unstyled,
            allowComments,
            emailField,
            showDeclined,
            hideVoteCounts,
            pageSize,
            userEmail,
            isSubscriber,
            tab,
            setTab,
            tabs,
            initialFeatureId,
            isFormOpen,
            setFormOpen,
            justSubmitted,
            setJustSubmitted,
            renderFeature,
            renderEmpty,
            renderHeader,
            cx: makeClassName(unstyled)
        }), [
        labels,
        unstyled,
        allowComments,
        emailField,
        showDeclined,
        hideVoteCounts,
        pageSize,
        userEmail,
        isSubscriber,
        tab,
        tabs,
        initialFeatureId,
        isFormOpen,
        justSubmitted,
        renderFeature,
        renderEmpty,
        renderHeader
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(BoardContextProvider, {
        value,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("section", {
            className: [
                unstyled ? "" : "fewchurs",
                className
            ].filter(Boolean).join(" ") || void 0,
            style: {
                ...themeToStyle(theme),
                ...style
            },
            "data-theme": colorScheme === "system" ? void 0 : colorScheme,
            children: children ?? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(DefaultBoard, {})
        })
    });
}
function DefaultBoard() {
    const { isFormOpen, justSubmitted, labels, renderHeader, cx } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            renderHeader ? renderHeader() : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(BoardHeading, {}),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-toolbar"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(BoardTabs, {}),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SubmitTrigger, {})
                ]
            }),
            justSubmitted && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: cx("fw-alert"),
                role: "status",
                children: labels.submitted
            }),
            isFormOpen && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(SubmitForm, {}),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FeatureList, {}),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(Branding, {})
        ]
    });
}
function BoardHeading() {
    const { labels, cx } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("h2", {
        className: cx("fw-heading"),
        children: labels.title
    });
}
function BoardTabs() {
    const { tabs, tab, setTab, labels, cx } = useBoard();
    if (tabs.length < 2) return null;
    const labelOf = {
        top: labels.tabTop,
        new: labels.tabNew,
        roadmap: labels.tabRoadmap
    };
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: cx("fw-tabs"),
        role: "tablist",
        "aria-label": labels.title,
        children: tabs.map((name)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                type: "button",
                role: "tab",
                id: `fw-tab-${name}`,
                className: cx("fw-tab"),
                "aria-selected": tab === name,
                tabIndex: tab === name ? 0 : -1,
                onClick: ()=>setTab(name),
                onKeyDown: (event)=>{
                    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
                    if (step === 0) return;
                    event.preventDefault();
                    const next = tabs[(tabs.indexOf(tab) + step + tabs.length) % tabs.length];
                    if (next) {
                        setTab(next);
                        document.getElementById(`fw-tab-${next}`)?.focus();
                    }
                },
                children: labelOf[name]
            }, name))
    });
}
function SubmitTrigger() {
    const { isFormOpen, setFormOpen, setJustSubmitted, labels, cx } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
        type: "button",
        className: cx("fw-btn"),
        "aria-expanded": isFormOpen,
        onClick: ()=>{
            if (!isFormOpen) setJustSubmitted(false);
            setFormOpen(!isFormOpen);
        },
        children: isFormOpen ? labels.cancel : labels.newRequest
    });
}
var FewchursBoard = Object.assign(BoardRoot, {
    Root: BoardRoot,
    Tabs: BoardTabs,
    List: FeatureList,
    SubmitTrigger,
    SubmitForm,
    Branding
});
;
;
function FewchursBoardDialog({ open, onClose, ariaLabel = "Feature requests", variant = "dialog", ...boardProps }) {
    const dialogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const openerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        openerRef.current = document.activeElement;
        dialogRef.current?.focus();
        function onKeyDown(event) {
            if (event.key === "Escape") onClose();
        }
        document.addEventListener("keydown", onKeyDown);
        return ()=>{
            document.removeEventListener("keydown", onKeyDown);
            openerRef.current?.focus?.();
        };
    }, [
        open,
        onClose
    ]);
    if (!open) return null;
    const isSheet = variant === "sheet";
    const { colorScheme } = boardProps;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: isSheet ? "fw-overlay fw-overlay--sheet" : "fw-overlay",
        onClick: onClose,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            ref: dialogRef,
            className: isSheet ? "fw-dialog fw-dialog--sheet" : "fw-dialog",
            "data-theme": colorScheme === "system" ? void 0 : colorScheme,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": ariaLabel,
            tabIndex: -1,
            onClick: (event)=>event.stopPropagation(),
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                    type: "button",
                    className: "fw-dialog__close",
                    "aria-label": "Close",
                    onClick: onClose,
                    children: "\xD7"
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(BoardRoot, {
                    ...boardProps
                })
            ]
        })
    });
}
;
;
;
function launcherClasses(floating) {
    if (!floating) return "fw-launcher";
    const side = floating === "left" ? " fw-launcher--left" : "";
    return `fw-launcher fw-launcher--floating${side}`;
}
function FewchursButton({ children = "Feedback", className, style, ariaLabel, floating = false, ...board }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setOpen(false), []);
    const classes = [
        board.unstyled ? "" : launcherClasses(floating),
        className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])("button", {
                type: "button",
                className: classes || void 0,
                style: {
                    ...themeToStyle(board.theme),
                    ...style
                },
                "aria-haspopup": "dialog",
                "aria-expanded": open,
                onClick: ()=>setOpen(true),
                children
            }),
            open ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(FewchursBoardDialog, {
                ...board,
                variant: "sheet",
                ariaLabel,
                open: true,
                onClose: close
            }), document.body) : null
        ]
    });
}
;
}),
];

//# sourceMappingURL=0ty8_%40fewchurs_react_dist_index_mjs_1s5103bh194yv._.js.map