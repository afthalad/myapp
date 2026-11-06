(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/@fewchurs/next/node_modules/@fewchurs/react/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/context/provider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/context/provider.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
"use client";
;
// src/client/version.ts
var SDK_VERSION = "1.3.0";
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
var USER_MESSAGES = {
    invalid_key: "Feedback is unavailable right now.",
    validation_failed: "Please check what you entered and try again.",
    rate_limited: "You have reached today's limit. Try again tomorrow.",
    not_found: "That request no longer exists.",
    limit_reached: "Feedback is unavailable right now.",
    server: "Something went wrong. Please try again.",
    network: "Could not reach the server. Check your connection."
};
function userMessage(error) {
    if (error.code === "validation_failed" && error.message) return error.message;
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
    const message = body?.error?.message ?? `Request failed (${status}).`;
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
        // missing_device_id is a client mistake the caller fixes the same way a bad field is fixed,
        // so it collapses into validation_failed rather than widening the public union.
        case "missing_device_id":
        case "validation_failed":
            return {
                code: "validation_failed",
                status: 400,
                message
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
    if (title.length < LIMITS.titleMin) {
        return validationError(`Title must be at least ${LIMITS.titleMin} characters.`);
    }
    if (title.length > LIMITS.titleMax) {
        return validationError(`Title must be at most ${LIMITS.titleMax} characters.`);
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
    if (text.length < LIMITS.commentMin) return validationError("Write a comment first.");
    if (text.length > LIMITS.commentMax) {
        return validationError(`Comment must be at most ${LIMITS.commentMax} characters.`);
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
                return {
                    ok: false,
                    error: networkError(messageOf(error))
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
            warnAboutKey(failure);
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
var warnedAboutKey = false;
function warnAboutKey(error) {
    if (error.code !== "invalid_key" || warnedAboutKey) return;
    if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && ("TURBOPACK compile-time value", "development") === "production") return;
    warnedAboutKey = true;
    console.warn(error.status === 403 ? `[fewchurs] ${error.message}` : "[fewchurs] The API key was rejected. Check FEWCHURS_API_KEY (server) or the apiKey passed to FewchursProvider, and that the key is active in your Fewchurs dashboard.");
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
var FewchursContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function FewchursProvider({ apiKey, baseUrl, deviceId: deviceIdProp, language, pageSize = 20, initialState, onEvent, client: clientProp, children }) {
    const [deviceId, setDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "FewchursProvider.useState": ()=>deviceIdProp ?? readDeviceId()
    }["FewchursProvider.useState"]);
    const deviceIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(deviceId);
    deviceIdRef.current = deviceIdProp ?? deviceId;
    const eventRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onEvent);
    eventRef.current = onEvent;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FewchursProvider.useEffect": ()=>{
            if (deviceIdProp) return;
            setDeviceId(resolveDeviceId());
        }
    }["FewchursProvider.useEffect"], [
        deviceIdProp
    ]);
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FewchursProvider.useMemo[client]": ()=>clientProp ?? createFewchursClient({
                apiKey,
                baseUrl,
                language,
                deviceId: {
                    "FewchursProvider.useMemo[client]": ()=>deviceIdRef.current
                }["FewchursProvider.useMemo[client]"]
            })
    }["FewchursProvider.useMemo[client]"], [
        clientProp,
        apiKey,
        baseUrl,
        language
    ]);
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FewchursProvider.useMemo[store]": ()=>createStore(client, {
                pageSize,
                initialState,
                onEvent: {
                    "FewchursProvider.useMemo[store]": (event)=>eventRef.current?.(event)
                }["FewchursProvider.useMemo[store]"]
            })
    }["FewchursProvider.useMemo[store]"], // initialState is a first-paint seed; a new object identity must not wipe live state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        client,
        pageSize
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FewchursProvider.useMemo[value]": ()=>({
                client,
                store,
                deviceId: deviceIdProp ?? deviceId,
                isReady: Boolean(deviceIdProp ?? deviceId) || !apiKey
            })
    }["FewchursProvider.useMemo[value]"], [
        client,
        store,
        deviceIdProp,
        deviceId,
        apiKey
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FewchursContext.Provider, {
        value,
        children
    });
}
function useFewchurs() {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(FewchursContext);
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(store.subscribe, store.getState, store.getState);
}
// src/hooks/useFewchursConfig.ts
function useFewchursConfig() {
    const { store } = useFewchurs();
    const state = useStoreState();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFewchursConfig.useEffect2": ()=>{
            store.ensureConfig();
        }
    }["useFewchursConfig.useEffect2"], [
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
var BoardContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
var BoardContextProvider = BoardContext.Provider;
function useBoard() {
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(BoardContext);
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
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
        className: cx("fw-branding"),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", {
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFeature.useEffect3": ()=>{
            if (!active || !isReady || !featureId) return;
            store.ensureFeature(featureId);
        }
    }["useFeature.useEffect3"], [
        store,
        featureId,
        active,
        isReady
    ]);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFeature.useCallback[refresh]": ()=>featureId ? store.refreshFeature(featureId) : Promise.resolve()
    }["useFeature.useCallback[refresh]"], [
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
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFeatures.useMemo2[query]": ()=>({
                sort,
                status: statusKey ? statusKey.split(",") : void 0
            })
    }["useFeatures.useMemo2[query]"], [
        sort,
        statusKey
    ]);
    const key = listKey(query);
    const list = listStateOf(state, key);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFeatures.useEffect4": ()=>{
            if (!enabled || !isReady) return;
            store.ensureFeatures(query, pageSize);
        }
    }["useFeatures.useEffect4"], [
        store,
        query,
        pageSize,
        enabled,
        isReady
    ]);
    const loadMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFeatures.useCallback2[loadMore]": ()=>store.loadMore(query, pageSize)
    }["useFeatures.useCallback2[loadMore]"], [
        store,
        query,
        pageSize
    ]);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFeatures.useCallback2[refresh]": ()=>store.refresh(query, pageSize)
    }["useFeatures.useCallback2[refresh]"], [
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
    const [isPending, setIsPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const feature = Object.values(state.lists).flatMap((list)=>list.features).find((candidate)=>candidate.id === featureId);
    const run = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFollow.useCallback3[run]": async (email)=>{
            setIsPending(true);
            setError(null);
            const result = await store.setFollowing(featureId, email);
            if (!result.ok) setError(result.error);
            setIsPending(false);
            return result.ok;
        }
    }["useFollow.useCallback3[run]"], [
        store,
        featureId
    ]);
    return {
        isFollowing: feature?.isFollowing ?? false,
        isPending,
        error,
        follow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useFollow.useCallback3": (email)=>run(email)
        }["useFollow.useCallback3"], [
            run
        ]),
        unfollow: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useFollow.useCallback3": ()=>run(null)
        }["useFollow.useCallback3"], [
            run
        ])
    };
}
;
function useVote(featureId) {
    const { store } = useFewchurs();
    const state = useStoreState();
    const [isPending, setIsPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const feature = Object.values(state.lists).flatMap((list)=>list.features).find((candidate)=>candidate.id === featureId);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVote.useCallback4[toggle]": async ()=>{
            setIsPending(true);
            setError(null);
            const result = await store.toggleVote(featureId);
            if (!result.ok) setError(result.error);
            setIsPending(false);
        }
    }["useVote.useCallback4[toggle]"], [
        store,
        featureId
    ]);
    const vote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVote.useCallback4[vote]": async ()=>{
            if (feature?.hasVoted) return;
            await toggle();
        }
    }["useVote.useCallback4[vote]"], [
        feature?.hasVoted,
        toggle
    ]);
    const unvote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useVote.useCallback4[unvote]": async ()=>{
            if (!feature?.hasVoted) return;
            await toggle();
        }
    }["useVote.useCallback4[unvote]"], [
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
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const comments = commentsStateOf(state, featureId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useComments.useEffect5": ()=>{
            if (!enabled || !isReady) return;
            store.ensureComments(featureId);
        }
    }["useComments.useEffect5"], [
        store,
        featureId,
        enabled,
        isReady
    ]);
    const loadMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useComments.useCallback5[loadMore]": ()=>store.loadMoreComments(featureId)
    }["useComments.useCallback5[loadMore]"], [
        store,
        featureId
    ]);
    const add = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useComments.useCallback5[add]": async (text, authorName)=>{
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
        }
    }["useComments.useCallback5[add]"], [
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
    const { comments, isLoading, isLoadingMore, error, hasMore, loadMore } = useComments(featureId);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: cx("fw-comments"),
        children: [
            isLoading && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: cx("fw-muted"),
                children: labels.loading
            }),
            error && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: cx("fw-error"),
                role: "alert",
                children: userMessage(error)
            }),
            !isLoading && !error && comments.length === 0 && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: cx("fw-muted"),
                children: labels.noComments
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("ul", {
                className: cx("fw-comment-list"),
                children: comments.map((comment)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("li", {
                        className: cx("fw-comment"),
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                className: cx("fw-comment__author"),
                                children: comment.authorName
                            }),
                            comment.isDeveloper && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                className: cx("fw-badge"),
                                children: [
                                    " ",
                                    labels.developer
                                ]
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                                className: cx("fw-muted"),
                                children: [
                                    " \xB7 ",
                                    formatDate(comment.createdAt)
                                ]
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                className: cx("fw-comment__text"),
                                children: comment.text
                            })
                        ]
                    }, comment.id))
            }),
            hasMore && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                type: "button",
                className: cx("fw-btn", "fw-btn--ghost"),
                disabled: isLoadingMore,
                onClick: ()=>void loadMore(),
                children: isLoadingMore ? labels.loading : labels.loadMore
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CommentForm, {
                featureId
            })
        ]
    });
}
function CommentForm({ featureId }) {
    const { labels, cx } = useBoard();
    const { add, isSubmitting, submitError } = useComments(featureId);
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [authorName, setAuthorName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("form", {
        className: cx("fw-form", "fw-form--inline"),
        onSubmit: async (event)=>{
            event.preventDefault();
            const posted = await add(text, authorName);
            if (posted) setText("");
        },
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-field"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                        className: cx("fw-sr-only"),
                        htmlFor: `fw-comment-${featureId}`,
                        children: labels.commentPlaceholder
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
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
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-field"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                        className: cx("fw-sr-only"),
                        htmlFor: `fw-comment-name-${featureId}`,
                        children: labels.fieldName
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                        id: `fw-comment-name-${featureId}`,
                        className: cx("fw-input"),
                        value: authorName,
                        maxLength: LIMITS.authorNameMax,
                        placeholder: labels.fieldName,
                        onChange: (event)=>setAuthorName(event.target.value)
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                type: "submit",
                className: cx("fw-btn"),
                disabled: isSubmitting,
                children: labels.postComment
            }),
            submitError && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
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
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(userEmail ?? "");
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (isFollowing) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
            type: "button",
            className: cx("fw-link"),
            disabled: isPending,
            onClick: ()=>void unfollow(),
            children: labels.following
        });
    }
    if (!isOpen) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
            type: "button",
            className: cx("fw-link"),
            onClick: ()=>setIsOpen(true),
            children: labels.follow
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("form", {
        className: cx("fw-form", "fw-form--inline"),
        onSubmit: async (event)=>{
            event.preventDefault();
            const ok = await follow(email);
            if (ok) setIsOpen(false);
        },
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                className: cx("fw-sr-only"),
                htmlFor: `fw-follow-${feature.id}`,
                children: labels.fieldEmail
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                id: `fw-follow-${feature.id}`,
                className: cx("fw-input"),
                type: "email",
                value: email,
                placeholder: labels.followPlaceholder,
                onChange: (event)=>setEmail(event.target.value),
                required: true
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                type: "submit",
                className: cx("fw-btn"),
                disabled: isPending,
                children: labels.follow
            }),
            error && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
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
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
        className: cx("fw-status", `fw-status--${status}`),
        children: labels.status[status]
    });
}
;
function VoteButton({ feature, isPending, onToggle }) {
    const { labels, hideVoteCounts, cx } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("button", {
        type: "button",
        className: cx("fw-vote"),
        "aria-pressed": feature.hasVoted,
        "aria-label": `${labels.upvote} ${feature.title}`,
        disabled: isPending,
        onClick: onToggle,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: cx("fw-vote__arrow"),
                "aria-hidden": "true",
                children: "\u25B2"
            }),
            !hideVoteCounts && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: cx("fw-vote__count"),
                children: feature.upvoteCount
            })
        ]
    });
}
;
function FeatureCard({ feature, defaultCommentsOpen = false }) {
    const { labels, allowComments, cx } = useBoard();
    const { isPending, toggle } = useVote(feature.id);
    const [showComments, setShowComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultCommentsOpen);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("li", {
        className: cx("fw-card"),
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(VoteButton, {
                feature,
                isPending,
                onToggle: ()=>void toggle()
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-card__body"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                        className: cx("fw-card__title"),
                        children: feature.title
                    }),
                    feature.description && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        className: cx("fw-card__desc"),
                        children: feature.description
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: cx("fw-meta"),
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(StatusBadge, {
                                status: feature.status
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                children: formatDate(feature.createdAt)
                            }),
                            allowComments && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("button", {
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
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FollowForm, {
                                feature
                            })
                        ]
                    }),
                    allowComments && showComments && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        id: `fw-comments-${feature.id}`,
                        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CommentList, {
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
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: cx("fw-skeleton"),
        role: "status",
        "aria-busy": "true",
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("span", {
                className: cx("fw-sr-only"),
                children: labels.loading
            }),
            roadmap ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: cx("fw-roadmap"),
                "aria-hidden": "true",
                children: ROADMAP_STATUSES.map((status)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: cx("fw-roadmap__column"),
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Bar, {
                                width: "40%"
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Rows, {
                                count: ROADMAP_ROW_COUNT
                            })
                        ]
                    }, status))
            }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                "aria-hidden": "true",
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Rows, {
                    count: rows
                })
            })
        ]
    });
}
function Rows({ count }) {
    const { cx } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: cx("fw-list"),
        children: Array.from({
            length: count
        }, (_, index)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-card", "fw-skeleton__card"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: cx("fw-skeleton__vote")
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        className: cx("fw-card__body"),
                        children: [
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Bar, {
                                width: "62%"
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Bar, {
                                width: "88%",
                                height: "0.6rem"
                            }),
                            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Bar, {
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
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: cx("fw-skeleton__bar"),
        style: {
            width,
            height
        }
    });
}
;
function FeatureList() {
    const { initialFeatureId } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            initialFeatureId && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PinnedFeature, {
                featureId: initialFeatureId
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Listing, {
                excludeId: initialFeatureId
            })
        ]
    });
}
function PinnedFeature({ featureId }) {
    const { cx } = useBoard();
    const { feature, isLoading } = useFeature(featureId);
    if (isLoading) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FeatureListSkeleton, {
        rows: 1
    });
    if (!feature) return null;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: cx("fw-pinned"),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("ul", {
            className: cx("fw-list"),
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FeatureCard, {
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
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: cx("fw-empty"),
            role: "alert",
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    children: userMessage(error)
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                    type: "button",
                    className: cx("fw-btn", "fw-btn--ghost"),
                    onClick: ()=>void refresh(),
                    children: labels.retry
                })
            ]
        });
    }
    if (isLoading && visible.length === 0) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FeatureListSkeleton, {
            roadmap: isRoadmap
        });
    }
    if (visible.length === 0) {
        if (renderEmpty) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: renderEmpty()
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            className: cx("fw-empty"),
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    className: cx("fw-empty__title"),
                    children: labels.emptyTitle
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                    children: labels.emptyBody
                })
            ]
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isRoadmap ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(RoadmapColumns, {
                features: visible
            }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Rows2, {
                features: visible
            }),
            hasMore && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: cx("fw-pagination"),
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
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
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("ul", {
        className: cx("fw-list"),
        children: features.map((feature)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FeatureRow, {
                feature
            }, feature.id))
    });
}
function RoadmapColumns({ features }) {
    const { labels, cx } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: cx("fw-roadmap"),
        children: ROADMAP_STATUSES.map((status)=>{
            const column = features.filter((feature)=>feature.status === status);
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("section", {
                className: cx("fw-roadmap__column"),
                "aria-label": labels.status[status],
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                        className: cx("fw-roadmap__heading"),
                        children: labels.status[status]
                    }),
                    column.length === 0 ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        className: cx("fw-muted"),
                        children: "\u2014"
                    }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("ul", {
                        className: cx("fw-list"),
                        children: column.map((feature)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FeatureRow, {
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
    if (!renderFeature) return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FeatureCard, {
        feature
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FeatureSlot, {
        feature
    });
}
function FeatureSlot({ feature }) {
    const { renderFeature } = useBoard();
    const { toggle } = useVote(feature.id);
    const { follow, unfollow } = useFollow(feature.id);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
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
    const [isPending, setIsPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const submit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSubmitFeature.useCallback6[submit]": async (input)=>{
            setIsPending(true);
            setError(null);
            const result = await store.submitFeature(input);
            setIsPending(false);
            if (!result.ok) {
                setError(result.error);
                return null;
            }
            return result.data;
        }
    }["useSubmitFeature.useCallback6[submit]"], [
        store
    ]);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSubmitFeature.useCallback6[reset]": ()=>setError(null)
    }["useSubmitFeature.useCallback6[reset]"], []);
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
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(userEmail ?? "");
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("form", {
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
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-field"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                        className: cx("fw-label"),
                        htmlFor: "fw-title",
                        children: labels.fieldTitle
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                        id: "fw-title",
                        className: cx("fw-input"),
                        value: title,
                        minLength: LIMITS.titleMin,
                        maxLength: LIMITS.titleMax,
                        placeholder: labels.fieldTitlePlaceholder,
                        onChange: (event)=>setTitle(event.target.value),
                        required: true
                    })
                ]
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-field"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                        className: cx("fw-label"),
                        htmlFor: "fw-description",
                        children: labels.fieldDescription
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("textarea", {
                        id: "fw-description",
                        className: cx("fw-input", "fw-textarea"),
                        value: description,
                        maxLength: LIMITS.descriptionMax,
                        placeholder: labels.fieldDescriptionPlaceholder,
                        onChange: (event)=>setDescription(event.target.value)
                    })
                ]
            }),
            emailField !== "off" && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-field"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("label", {
                        className: cx("fw-label"),
                        htmlFor: "fw-email",
                        children: labels.fieldEmail
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("input", {
                        id: "fw-email",
                        className: cx("fw-input"),
                        type: "email",
                        value: email,
                        placeholder: labels.followPlaceholder,
                        "aria-describedby": "fw-email-hint",
                        onChange: (event)=>setEmail(event.target.value),
                        required: emailField === "required"
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                        id: "fw-email-hint",
                        className: cx("fw-muted"),
                        children: labels.fieldEmailHint
                    })
                ]
            }),
            error && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: cx("fw-error"),
                role: "alert",
                children: userMessage(error)
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-form__actions"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                        type: "submit",
                        className: cx("fw-btn"),
                        disabled: isPending,
                        children: isPending ? labels.submitting : labels.submit
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
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
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultTab ?? tabs[0] ?? "top");
    const [isFormOpen, setFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [justSubmitted, setJustSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BoardRoot.useEffect6": ()=>{
            store.emit({
                name: "boardOpened"
            });
        }
    }["BoardRoot.useEffect6"], [
        store
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "BoardRoot.useMemo3[value]": ()=>({
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
            })
    }["BoardRoot.useMemo3[value]"], [
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
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BoardContextProvider, {
        value,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("section", {
            className: [
                unstyled ? "" : "fewchurs",
                className
            ].filter(Boolean).join(" ") || void 0,
            style: {
                ...themeToStyle(theme),
                ...style
            },
            "data-theme": colorScheme === "system" ? void 0 : colorScheme,
            children: children ?? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DefaultBoard, {})
        })
    });
}
function DefaultBoard() {
    const { isFormOpen, justSubmitted, labels, renderHeader, cx } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            renderHeader ? renderHeader() : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BoardHeading, {}),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: cx("fw-toolbar"),
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BoardTabs, {}),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SubmitTrigger, {})
                ]
            }),
            justSubmitted && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("p", {
                className: cx("fw-alert"),
                role: "status",
                children: labels.submitted
            }),
            isFormOpen && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SubmitForm, {}),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FeatureList, {}),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Branding, {})
        ]
    });
}
function BoardHeading() {
    const { labels, cx } = useBoard();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("h2", {
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
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: cx("fw-tabs"),
        role: "tablist",
        "aria-label": labels.title,
        children: tabs.map((name)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
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
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
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
    const dialogRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const openerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FewchursBoardDialog.useEffect7": ()=>{
            if (!open) return;
            openerRef.current = document.activeElement;
            dialogRef.current?.focus();
            function onKeyDown(event) {
                if (event.key === "Escape") onClose();
            }
            document.addEventListener("keydown", onKeyDown);
            return ({
                "FewchursBoardDialog.useEffect7": ()=>{
                    document.removeEventListener("keydown", onKeyDown);
                    openerRef.current?.focus?.();
                }
            })["FewchursBoardDialog.useEffect7"];
        }
    }["FewchursBoardDialog.useEffect7"], [
        open,
        onClose
    ]);
    if (!open) return null;
    const isSheet = variant === "sheet";
    const { colorScheme } = boardProps;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
        className: isSheet ? "fw-overlay fw-overlay--sheet" : "fw-overlay",
        onClick: onClose,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])("div", {
            ref: dialogRef,
            className: isSheet ? "fw-dialog fw-dialog--sheet" : "fw-dialog",
            "data-theme": colorScheme === "system" ? void 0 : colorScheme,
            role: "dialog",
            "aria-modal": "true",
            "aria-label": ariaLabel,
            tabIndex: -1,
            onClick: (event)=>event.stopPropagation(),
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
                    type: "button",
                    className: "fw-dialog__close",
                    "aria-label": "Close",
                    onClick: onClose,
                    children: "\xD7"
                }),
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(BoardRoot, {
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
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FewchursButton.useCallback7[close]": ()=>setOpen(false)
    }["FewchursButton.useCallback7[close]"], []);
    const classes = [
        board.unstyled ? "" : launcherClasses(floating),
        className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("button", {
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
            open ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(FewchursBoardDialog, {
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
]);

//# sourceMappingURL=0ty8_%40fewchurs_react_dist_index_mjs_17fozqzg3x9dh._.js.map