  /** Set to try enabling V-Sync on GPU */
  export const FLAG_VSYNC_HINT = 64
  /** Set to run program in fullscreen */
  export const FLAG_FULLSCREEN_MODE = 2
  /** Set to allow resizable window */
  export const FLAG_WINDOW_RESIZABLE = 4
  /** Set to disable window decoration (frame and buttons) */
  export const FLAG_WINDOW_UNDECORATED = 8
  /** Set to hide window */
  export const FLAG_WINDOW_HIDDEN = 128
  /** Set to minimize window (iconify) */
  export const FLAG_WINDOW_MINIMIZED = 512
  /** Set to maximize window (expanded to monitor) */
  export const FLAG_WINDOW_MAXIMIZED = 1024
  /** Set to window non focused */
  export const FLAG_WINDOW_UNFOCUSED = 2048
  /** Set to window always on top */
  export const FLAG_WINDOW_TOPMOST = 4096
  /** Set to allow windows running while minimized */
  export const FLAG_WINDOW_ALWAYS_RUN = 256
  /** Set to allow transparent framebuffer */
  export const FLAG_WINDOW_TRANSPARENT = 16
  /** Set to support HighDPI */
  export const FLAG_WINDOW_HIGHDPI = 8192
  /** Set to support mouse passthrough, only supported when FLAG_WINDOW_UNDECORATED */
  export const FLAG_WINDOW_MOUSE_PASSTHROUGH = 16384
  /** Set to try enabling MSAA 4X */
  export const FLAG_MSAA_4X_HINT = 32
  /** Set to try enabling interlaced video format (for V3D) */
  export const FLAG_INTERLACED_HINT = 65536
  /** Display all logs */
  export const LOG_ALL = 0
  /** Trace logging, intended for internal use only */
  export const LOG_TRACE = 1
  /** Debug logging, used for internal debugging, it should be disabled on release builds */
  export const LOG_DEBUG = 2
  /** Info logging, used for program execution info */
  export const LOG_INFO = 3
  /** Warning logging, used on recoverable failures */
  export const LOG_WARNING = 4
  /** Error logging, used on unrecoverable failures */
  export const LOG_ERROR = 5
  /** Fatal logging, used to abort program: exit(EXIT_FAILURE) */
  export const LOG_FATAL = 6
  /** Disable logging */
  export const LOG_NONE = 7
  /** Key: NULL, used for no key pressed */
  export const KEY_NULL = 0
  /** Key: ' */
  export const KEY_APOSTROPHE = 39
  /** Key: , */
  export const KEY_COMMA = 44
  /** Key: - */
  export const KEY_MINUS = 45
  /** Key: . */
  export const KEY_PERIOD = 46
  /** Key: / */
  export const KEY_SLASH = 47
  /** Key: 0 */
  export const KEY_ZERO = 48
  /** Key: 1 */
  export const KEY_ONE = 49
  /** Key: 2 */
  export const KEY_TWO = 50
  /** Key: 3 */
  export const KEY_THREE = 51
  /** Key: 4 */
  export const KEY_FOUR = 52
  /** Key: 5 */
  export const KEY_FIVE = 53
  /** Key: 6 */
  export const KEY_SIX = 54
  /** Key: 7 */
  export const KEY_SEVEN = 55
  /** Key: 8 */
  export const KEY_EIGHT = 56
  /** Key: 9 */
  export const KEY_NINE = 57
  /** Key: ; */
  export const KEY_SEMICOLON = 59
  /** Key: = */
  export const KEY_EQUAL = 61
  /** Key: A | a */
  export const KEY_A = 65
  /** Key: B | b */
  export const KEY_B = 66
  /** Key: C | c */
  export const KEY_C = 67
  /** Key: D | d */
  export const KEY_D = 68
  /** Key: E | e */
  export const KEY_E = 69
  /** Key: F | f */
  export const KEY_F = 70
  /** Key: G | g */
  export const KEY_G = 71
  /** Key: H | h */
  export const KEY_H = 72
  /** Key: I | i */
  export const KEY_I = 73
  /** Key: J | j */
  export const KEY_J = 74
  /** Key: K | k */
  export const KEY_K = 75
  /** Key: L | l */
  export const KEY_L = 76
  /** Key: M | m */
  export const KEY_M = 77
  /** Key: N | n */
  export const KEY_N = 78
  /** Key: O | o */
  export const KEY_O = 79
  /** Key: P | p */
  export const KEY_P = 80
  /** Key: Q | q */
  export const KEY_Q = 81
  /** Key: R | r */
  export const KEY_R = 82
  /** Key: S | s */
  export const KEY_S = 83
  /** Key: T | t */
  export const KEY_T = 84
  /** Key: U | u */
  export const KEY_U = 85
  /** Key: V | v */
  export const KEY_V = 86
  /** Key: W | w */
  export const KEY_W = 87
  /** Key: X | x */
  export const KEY_X = 88
  /** Key: Y | y */
  export const KEY_Y = 89
  /** Key: Z | z */
  export const KEY_Z = 90
  /** Key: [ */
  export const KEY_LEFT_BRACKET = 91
  /** Key: '\' */
  export const KEY_BACKSLASH = 92
  /** Key: ] */
  export const KEY_RIGHT_BRACKET = 93
  /** Key: ` */
  export const KEY_GRAVE = 96
  /** Key: Space */
  export const KEY_SPACE = 32
  /** Key: Esc */
  export const KEY_ESCAPE = 256
  /** Key: Enter */
  export const KEY_ENTER = 257
  /** Key: Tab */
  export const KEY_TAB = 258
  /** Key: Backspace */
  export const KEY_BACKSPACE = 259
  /** Key: Ins */
  export const KEY_INSERT = 260
  /** Key: Del */
  export const KEY_DELETE = 261
  /** Key: Cursor right */
  export const KEY_RIGHT = 262
  /** Key: Cursor left */
  export const KEY_LEFT = 263
  /** Key: Cursor down */
  export const KEY_DOWN = 264
  /** Key: Cursor up */
  export const KEY_UP = 265
  /** Key: Page up */
  export const KEY_PAGE_UP = 266
  /** Key: Page down */
  export const KEY_PAGE_DOWN = 267
  /** Key: Home */
  export const KEY_HOME = 268
  /** Key: End */
  export const KEY_END = 269
  /** Key: Caps lock */
  export const KEY_CAPS_LOCK = 280
  /** Key: Scroll down */
  export const KEY_SCROLL_LOCK = 281
  /** Key: Num lock */
  export const KEY_NUM_LOCK = 282
  /** Key: Print screen */
  export const KEY_PRINT_SCREEN = 283
  /** Key: Pause */
  export const KEY_PAUSE = 284
  /** Key: F1 */
  export const KEY_F1 = 290
  /** Key: F2 */
  export const KEY_F2 = 291
  /** Key: F3 */
  export const KEY_F3 = 292
  /** Key: F4 */
  export const KEY_F4 = 293
  /** Key: F5 */
  export const KEY_F5 = 294
  /** Key: F6 */
  export const KEY_F6 = 295
  /** Key: F7 */
  export const KEY_F7 = 296
  /** Key: F8 */
  export const KEY_F8 = 297
  /** Key: F9 */
  export const KEY_F9 = 298
  /** Key: F10 */
  export const KEY_F10 = 299
  /** Key: F11 */
  export const KEY_F11 = 300
  /** Key: F12 */
  export const KEY_F12 = 301
  /** Key: Shift left */
  export const KEY_LEFT_SHIFT = 340
  /** Key: Control left */
  export const KEY_LEFT_CONTROL = 341
  /** Key: Alt left */
  export const KEY_LEFT_ALT = 342
  /** Key: Super left */
  export const KEY_LEFT_SUPER = 343
  /** Key: Shift right */
  export const KEY_RIGHT_SHIFT = 344
  /** Key: Control right */
  export const KEY_RIGHT_CONTROL = 345
  /** Key: Alt right */
  export const KEY_RIGHT_ALT = 346
  /** Key: Super right */
  export const KEY_RIGHT_SUPER = 347
  /** Key: KB menu */
  export const KEY_KB_MENU = 348
  /** Key: Keypad 0 */
  export const KEY_KP_0 = 320
  /** Key: Keypad 1 */
  export const KEY_KP_1 = 321
  /** Key: Keypad 2 */
  export const KEY_KP_2 = 322
  /** Key: Keypad 3 */
  export const KEY_KP_3 = 323
  /** Key: Keypad 4 */
  export const KEY_KP_4 = 324
  /** Key: Keypad 5 */
  export const KEY_KP_5 = 325
  /** Key: Keypad 6 */
  export const KEY_KP_6 = 326
  /** Key: Keypad 7 */
  export const KEY_KP_7 = 327
  /** Key: Keypad 8 */
  export const KEY_KP_8 = 328
  /** Key: Keypad 9 */
  export const KEY_KP_9 = 329
  /** Key: Keypad . */
  export const KEY_KP_DECIMAL = 330
  /** Key: Keypad / */
  export const KEY_KP_DIVIDE = 331
  /** Key: Keypad * */
  export const KEY_KP_MULTIPLY = 332
  /** Key: Keypad - */
  export const KEY_KP_SUBTRACT = 333
  /** Key: Keypad + */
  export const KEY_KP_ADD = 334
  /** Key: Keypad Enter */
  export const KEY_KP_ENTER = 335
  /** Key: Keypad = */
  export const KEY_KP_EQUAL = 336
  /** Key: Android back button */
  export const KEY_BACK = 4
  /** Key: Android menu button */
  export const KEY_MENU = 82
  /** Key: Android volume up button */
  export const KEY_VOLUME_UP = 24
  /** Key: Android volume down button */
  export const KEY_VOLUME_DOWN = 25
  /** Mouse button left */
  export const MOUSE_BUTTON_LEFT = 0
  /** Mouse button right */
  export const MOUSE_BUTTON_RIGHT = 1
  /** Mouse button middle (pressed wheel) */
  export const MOUSE_BUTTON_MIDDLE = 2
  /** Mouse button side (advanced mouse device) */
  export const MOUSE_BUTTON_SIDE = 3
  /** Mouse button extra (advanced mouse device) */
  export const MOUSE_BUTTON_EXTRA = 4
  /** Mouse button forward (advanced mouse device) */
  export const MOUSE_BUTTON_FORWARD = 5
  /** Mouse button back (advanced mouse device) */
  export const MOUSE_BUTTON_BACK = 6
  /** Default pointer shape */
  export const MOUSE_CURSOR_DEFAULT = 0
  /** Arrow shape */
  export const MOUSE_CURSOR_ARROW = 1
  /** Text writing cursor shape */
  export const MOUSE_CURSOR_IBEAM = 2
  /** Cross shape */
  export const MOUSE_CURSOR_CROSSHAIR = 3
  /** Pointing hand cursor */
  export const MOUSE_CURSOR_POINTING_HAND = 4
  /** Horizontal resize/move arrow shape */
  export const MOUSE_CURSOR_RESIZE_EW = 5
  /** Vertical resize/move arrow shape */
  export const MOUSE_CURSOR_RESIZE_NS = 6
  /** Top-left to bottom-right diagonal resize/move arrow shape */
  export const MOUSE_CURSOR_RESIZE_NWSE = 7
  /** The top-right to bottom-left diagonal resize/move arrow shape */
  export const MOUSE_CURSOR_RESIZE_NESW = 8
  /** The omnidirectional resize/move cursor shape */
  export const MOUSE_CURSOR_RESIZE_ALL = 9
  /** The operation-not-allowed shape */
  export const MOUSE_CURSOR_NOT_ALLOWED = 10
  /** Unknown button, just for error checking */
  export const GAMEPAD_BUTTON_UNKNOWN = 0
  /** Gamepad left DPAD up button */
  export const GAMEPAD_BUTTON_LEFT_FACE_UP = 1
  /** Gamepad left DPAD right button */
  export const GAMEPAD_BUTTON_LEFT_FACE_RIGHT = 2
  /** Gamepad left DPAD down button */
  export const GAMEPAD_BUTTON_LEFT_FACE_DOWN = 3
  /** Gamepad left DPAD left button */
  export const GAMEPAD_BUTTON_LEFT_FACE_LEFT = 4
  /** Gamepad right button up (i.e. PS3: Triangle, Xbox: Y) */
  export const GAMEPAD_BUTTON_RIGHT_FACE_UP = 5
  /** Gamepad right button right (i.e. PS3: Square, Xbox: X) */
  export const GAMEPAD_BUTTON_RIGHT_FACE_RIGHT = 6
  /** Gamepad right button down (i.e. PS3: Cross, Xbox: A) */
  export const GAMEPAD_BUTTON_RIGHT_FACE_DOWN = 7
  /** Gamepad right button left (i.e. PS3: Circle, Xbox: B) */
  export const GAMEPAD_BUTTON_RIGHT_FACE_LEFT = 8
  /** Gamepad top/back trigger left (first), it could be a trailing button */
  export const GAMEPAD_BUTTON_LEFT_TRIGGER_1 = 9
  /** Gamepad top/back trigger left (second), it could be a trailing button */
  export const GAMEPAD_BUTTON_LEFT_TRIGGER_2 = 10
  /** Gamepad top/back trigger right (one), it could be a trailing button */
  export const GAMEPAD_BUTTON_RIGHT_TRIGGER_1 = 11
  /** Gamepad top/back trigger right (second), it could be a trailing button */
  export const GAMEPAD_BUTTON_RIGHT_TRIGGER_2 = 12
  /** Gamepad center buttons, left one (i.e. PS3: Select) */
  export const GAMEPAD_BUTTON_MIDDLE_LEFT = 13
  /** Gamepad center buttons, middle one (i.e. PS3: PS, Xbox: XBOX) */
  export const GAMEPAD_BUTTON_MIDDLE = 14
  /** Gamepad center buttons, right one (i.e. PS3: Start) */
  export const GAMEPAD_BUTTON_MIDDLE_RIGHT = 15
  /** Gamepad joystick pressed button left */
  export const GAMEPAD_BUTTON_LEFT_THUMB = 16
  /** Gamepad joystick pressed button right */
  export const GAMEPAD_BUTTON_RIGHT_THUMB = 17
  /** Gamepad left stick X axis */
  export const GAMEPAD_AXIS_LEFT_X = 0
  /** Gamepad left stick Y axis */
  export const GAMEPAD_AXIS_LEFT_Y = 1
  /** Gamepad right stick X axis */
  export const GAMEPAD_AXIS_RIGHT_X = 2
  /** Gamepad right stick Y axis */
  export const GAMEPAD_AXIS_RIGHT_Y = 3
  /** Gamepad back trigger left, pressure level: [1..-1] */
  export const GAMEPAD_AXIS_LEFT_TRIGGER = 4
  /** Gamepad back trigger right, pressure level: [1..-1] */
  export const GAMEPAD_AXIS_RIGHT_TRIGGER = 5
  /** Albedo material (same as: MATERIAL_MAP_DIFFUSE) */
  export const MATERIAL_MAP_ALBEDO = 0
  /** Metalness material (same as: MATERIAL_MAP_SPECULAR) */
  export const MATERIAL_MAP_METALNESS = 1
  /** Normal material */
  export const MATERIAL_MAP_NORMAL = 2
  /** Roughness material */
  export const MATERIAL_MAP_ROUGHNESS = 3
  /** Ambient occlusion material */
  export const MATERIAL_MAP_OCCLUSION = 4
  /** Emission material */
  export const MATERIAL_MAP_EMISSION = 5
  /** Heightmap material */
  export const MATERIAL_MAP_HEIGHT = 6
  /** Cubemap material (NOTE: Uses GL_TEXTURE_CUBE_MAP) */
  export const MATERIAL_MAP_CUBEMAP = 7
  /** Irradiance material (NOTE: Uses GL_TEXTURE_CUBE_MAP) */
  export const MATERIAL_MAP_IRRADIANCE = 8
  /** Prefilter material (NOTE: Uses GL_TEXTURE_CUBE_MAP) */
  export const MATERIAL_MAP_PREFILTER = 9
  /** Brdf material */
  export const MATERIAL_MAP_BRDF = 10
  /** Shader location: vertex attribute: position */
  export const SHADER_LOC_VERTEX_POSITION = 0
  /** Shader location: vertex attribute: texcoord01 */
  export const SHADER_LOC_VERTEX_TEXCOORD01 = 1
  /** Shader location: vertex attribute: texcoord02 */
  export const SHADER_LOC_VERTEX_TEXCOORD02 = 2
  /** Shader location: vertex attribute: normal */
  export const SHADER_LOC_VERTEX_NORMAL = 3
  /** Shader location: vertex attribute: tangent */
  export const SHADER_LOC_VERTEX_TANGENT = 4
  /** Shader location: vertex attribute: color */
  export const SHADER_LOC_VERTEX_COLOR = 5
  /** Shader location: matrix uniform: model-view-projection */
  export const SHADER_LOC_MATRIX_MVP = 6
  /** Shader location: matrix uniform: view (camera transform) */
  export const SHADER_LOC_MATRIX_VIEW = 7
  /** Shader location: matrix uniform: projection */
  export const SHADER_LOC_MATRIX_PROJECTION = 8
  /** Shader location: matrix uniform: model (transform) */
  export const SHADER_LOC_MATRIX_MODEL = 9
  /** Shader location: matrix uniform: normal */
  export const SHADER_LOC_MATRIX_NORMAL = 10
  /** Shader location: vector uniform: view */
  export const SHADER_LOC_VECTOR_VIEW = 11
  /** Shader location: vector uniform: diffuse color */
  export const SHADER_LOC_COLOR_DIFFUSE = 12
  /** Shader location: vector uniform: specular color */
  export const SHADER_LOC_COLOR_SPECULAR = 13
  /** Shader location: vector uniform: ambient color */
  export const SHADER_LOC_COLOR_AMBIENT = 14
  /** Shader location: sampler2d texture: albedo (same as: SHADER_LOC_MAP_DIFFUSE) */
  export const SHADER_LOC_MAP_ALBEDO = 15
  /** Shader location: sampler2d texture: metalness (same as: SHADER_LOC_MAP_SPECULAR) */
  export const SHADER_LOC_MAP_METALNESS = 16
  /** Shader location: sampler2d texture: normal */
  export const SHADER_LOC_MAP_NORMAL = 17
  /** Shader location: sampler2d texture: roughness */
  export const SHADER_LOC_MAP_ROUGHNESS = 18
  /** Shader location: sampler2d texture: occlusion */
  export const SHADER_LOC_MAP_OCCLUSION = 19
  /** Shader location: sampler2d texture: emission */
  export const SHADER_LOC_MAP_EMISSION = 20
  /** Shader location: sampler2d texture: height */
  export const SHADER_LOC_MAP_HEIGHT = 21
  /** Shader location: samplerCube texture: cubemap */
  export const SHADER_LOC_MAP_CUBEMAP = 22
  /** Shader location: samplerCube texture: irradiance */
  export const SHADER_LOC_MAP_IRRADIANCE = 23
  /** Shader location: samplerCube texture: prefilter */
  export const SHADER_LOC_MAP_PREFILTER = 24
  /** Shader location: sampler2d texture: brdf */
  export const SHADER_LOC_MAP_BRDF = 25
  /** Shader uniform type: float */
  export const SHADER_UNIFORM_FLOAT = 0
  /** Shader uniform type: vec2 (2 float) */
  export const SHADER_UNIFORM_VEC2 = 1
  /** Shader uniform type: vec3 (3 float) */
  export const SHADER_UNIFORM_VEC3 = 2
  /** Shader uniform type: vec4 (4 float) */
  export const SHADER_UNIFORM_VEC4 = 3
  /** Shader uniform type: int */
  export const SHADER_UNIFORM_INT = 4
  /** Shader uniform type: ivec2 (2 int) */
  export const SHADER_UNIFORM_IVEC2 = 5
  /** Shader uniform type: ivec3 (3 int) */
  export const SHADER_UNIFORM_IVEC3 = 6
  /** Shader uniform type: ivec4 (4 int) */
  export const SHADER_UNIFORM_IVEC4 = 7
  /** Shader uniform type: sampler2d */
  export const SHADER_UNIFORM_SAMPLER2D = 8
  /** Shader attribute type: float */
  export const SHADER_ATTRIB_FLOAT = 0
  /** Shader attribute type: vec2 (2 float) */
  export const SHADER_ATTRIB_VEC2 = 1
  /** Shader attribute type: vec3 (3 float) */
  export const SHADER_ATTRIB_VEC3 = 2
  /** Shader attribute type: vec4 (4 float) */
  export const SHADER_ATTRIB_VEC4 = 3
  /** 8 bit per pixel (no alpha) */
  export const PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = 1
  /** 8*2 bpp (2 channels) */
  export const PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = 2
  /** 16 bpp */
  export const PIXELFORMAT_UNCOMPRESSED_R5G6B5 = 3
  /** 24 bpp */
  export const PIXELFORMAT_UNCOMPRESSED_R8G8B8 = 4
  /** 16 bpp (1 bit alpha) */
  export const PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = 5
  /** 16 bpp (4 bit alpha) */
  export const PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = 6
  /** 32 bpp */
  export const PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = 7
  /** 32 bpp (1 channel - float) */
  export const PIXELFORMAT_UNCOMPRESSED_R32 = 8
  /** 32*3 bpp (3 channels - float) */
  export const PIXELFORMAT_UNCOMPRESSED_R32G32B32 = 9
  /** 32*4 bpp (4 channels - float) */
  export const PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = 10
  /** 4 bpp (no alpha) */
  export const PIXELFORMAT_COMPRESSED_DXT1_RGB = 11
  /** 4 bpp (1 bit alpha) */
  export const PIXELFORMAT_COMPRESSED_DXT1_RGBA = 12
  /** 8 bpp */
  export const PIXELFORMAT_COMPRESSED_DXT3_RGBA = 13
  /** 8 bpp */
  export const PIXELFORMAT_COMPRESSED_DXT5_RGBA = 14
  /** 4 bpp */
  export const PIXELFORMAT_COMPRESSED_ETC1_RGB = 15
  /** 4 bpp */
  export const PIXELFORMAT_COMPRESSED_ETC2_RGB = 16
  /** 8 bpp */
  export const PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 17
  /** 4 bpp */
  export const PIXELFORMAT_COMPRESSED_PVRT_RGB = 18
  /** 4 bpp */
  export const PIXELFORMAT_COMPRESSED_PVRT_RGBA = 19
  /** 8 bpp */
  export const PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 20
  /** 2 bpp */
  export const PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 21
  /** No filter, just pixel approximation */
  export const TEXTURE_FILTER_POINT = 0
  /** Linear filtering */
  export const TEXTURE_FILTER_BILINEAR = 1
  /** Trilinear filtering (linear with mipmaps) */
  export const TEXTURE_FILTER_TRILINEAR = 2
  /** Anisotropic filtering 4x */
  export const TEXTURE_FILTER_ANISOTROPIC_4X = 3
  /** Anisotropic filtering 8x */
  export const TEXTURE_FILTER_ANISOTROPIC_8X = 4
  /** Anisotropic filtering 16x */
  export const TEXTURE_FILTER_ANISOTROPIC_16X = 5
  /** Repeats texture in tiled mode */
  export const TEXTURE_WRAP_REPEAT = 0
  /** Clamps texture to edge pixel in tiled mode */
  export const TEXTURE_WRAP_CLAMP = 1
  /** Mirrors and repeats the texture in tiled mode */
  export const TEXTURE_WRAP_MIRROR_REPEAT = 2
  /** Mirrors and clamps to border the texture in tiled mode */
  export const TEXTURE_WRAP_MIRROR_CLAMP = 3
  /** Automatically detect layout type */
  export const CUBEMAP_LAYOUT_AUTO_DETECT = 0
  /** Layout is defined by a vertical line with faces */
  export const CUBEMAP_LAYOUT_LINE_VERTICAL = 1
  /** Layout is defined by a horizontal line with faces */
  export const CUBEMAP_LAYOUT_LINE_HORIZONTAL = 2
  /** Layout is defined by a 3x4 cross with cubemap faces */
  export const CUBEMAP_LAYOUT_CROSS_THREE_BY_FOUR = 3
  /** Layout is defined by a 4x3 cross with cubemap faces */
  export const CUBEMAP_LAYOUT_CROSS_FOUR_BY_THREE = 4
  /** Layout is defined by a panorama image (equirrectangular map) */
  export const CUBEMAP_LAYOUT_PANORAMA = 5
  /** Default font generation, anti-aliased */
  export const FONT_DEFAULT = 0
  /** Bitmap font generation, no anti-aliasing */
  export const FONT_BITMAP = 1
  /** SDF font generation, requires external shader */
  export const FONT_SDF = 2
  /** Blend textures considering alpha (default) */
  export const BLEND_ALPHA = 0
  /** Blend textures adding colors */
  export const BLEND_ADDITIVE = 1
  /** Blend textures multiplying colors */
  export const BLEND_MULTIPLIED = 2
  /** Blend textures adding colors (alternative) */
  export const BLEND_ADD_COLORS = 3
  /** Blend textures subtracting colors (alternative) */
  export const BLEND_SUBTRACT_COLORS = 4
  /** Blend premultiplied textures considering alpha */
  export const BLEND_ALPHA_PREMULTIPLY = 5
  /** Blend textures using custom src/dst factors (use rlSetBlendFactors()) */
  export const BLEND_CUSTOM = 6
  /** Blend textures using custom rgb/alpha separate src/dst factors (use rlSetBlendFactorsSeparate()) */
  export const BLEND_CUSTOM_SEPARATE = 7
  /** No gesture */
  export const GESTURE_NONE = 0
  /** Tap gesture */
  export const GESTURE_TAP = 1
  /** Double tap gesture */
  export const GESTURE_DOUBLETAP = 2
  /** Hold gesture */
  export const GESTURE_HOLD = 4
  /** Drag gesture */
  export const GESTURE_DRAG = 8
  /** Swipe right gesture */
  export const GESTURE_SWIPE_RIGHT = 16
  /** Swipe left gesture */
  export const GESTURE_SWIPE_LEFT = 32
  /** Swipe up gesture */
  export const GESTURE_SWIPE_UP = 64
  /** Swipe down gesture */
  export const GESTURE_SWIPE_DOWN = 128
  /** Pinch in gesture */
  export const GESTURE_PINCH_IN = 256
  /** Pinch out gesture */
  export const GESTURE_PINCH_OUT = 512
  /** Custom camera */
  export const CAMERA_CUSTOM = 0
  /** Free camera */
  export const CAMERA_FREE = 1
  /** Orbital camera */
  export const CAMERA_ORBITAL = 2
  /** First person camera */
  export const CAMERA_FIRST_PERSON = 3
  /** Third person camera */
  export const CAMERA_THIRD_PERSON = 4
  /** Perspective projection */
  export const CAMERA_PERSPECTIVE = 0
  /** Orthographic projection */
  export const CAMERA_ORTHOGRAPHIC = 1
  /** Npatch layout: 3x3 tiles */
  export const NPATCH_NINE_PATCH = 0
  /** Npatch layout: 1x3 tiles */
  export const NPATCH_THREE_PATCH_VERTICAL = 1
  /** Npatch layout: 3x1 tiles */
  export const NPATCH_THREE_PATCH_HORIZONTAL = 2
  /**  */
  export const STATE_NORMAL = 0
  /**  */
  export const STATE_FOCUSED = 1
  /**  */
  export const STATE_PRESSED = 2
  /**  */
  export const STATE_DISABLED = 3
  /**  */
  export const TEXT_ALIGN_LEFT = 0
  /**  */
  export const TEXT_ALIGN_CENTER = 1
  /**  */
  export const TEXT_ALIGN_RIGHT = 2
  /**  */
  export const DEFAULT = 0
  /** Used also for: LABELBUTTON */
  export const LABEL = 1
  /**  */
  export const BUTTON = 2
  /** Used also for: TOGGLEGROUP */
  export const TOGGLE = 3
  /** Used also for: SLIDERBAR */
  export const SLIDER = 4
  /**  */
  export const PROGRESSBAR = 5
  /**  */
  export const CHECKBOX = 6
  /**  */
  export const COMBOBOX = 7
  /**  */
  export const DROPDOWNBOX = 8
  /** Used also for: TEXTBOXMULTI */
  export const TEXTBOX = 9
  /**  */
  export const VALUEBOX = 10
  /** Uses: BUTTON, VALUEBOX */
  export const SPINNER = 11
  /**  */
  export const LISTVIEW = 12
  /**  */
  export const COLORPICKER = 13
  /**  */
  export const SCROLLBAR = 14
  /**  */
  export const STATUSBAR = 15
  /**  */
  export const BORDER_COLOR_NORMAL = 0
  /**  */
  export const BASE_COLOR_NORMAL = 1
  /**  */
  export const TEXT_COLOR_NORMAL = 2
  /**  */
  export const BORDER_COLOR_FOCUSED = 3
  /**  */
  export const BASE_COLOR_FOCUSED = 4
  /**  */
  export const TEXT_COLOR_FOCUSED = 5
  /**  */
  export const BORDER_COLOR_PRESSED = 6
  /**  */
  export const BASE_COLOR_PRESSED = 7
  /**  */
  export const TEXT_COLOR_PRESSED = 8
  /**  */
  export const BORDER_COLOR_DISABLED = 9
  /**  */
  export const BASE_COLOR_DISABLED = 10
  /**  */
  export const TEXT_COLOR_DISABLED = 11
  /**  */
  export const BORDER_WIDTH = 12
  /**  */
  export const TEXT_PADDING = 13
  /**  */
  export const TEXT_ALIGNMENT = 14
  /**  */
  export const RESERVED = 15
  /** Text size (glyphs max height) */
  export const TEXT_SIZE = 16
  /** Text spacing between glyphs */
  export const TEXT_SPACING = 17
  /** Line control color */
  export const LINE_COLOR = 18
  /** Background color */
  export const BACKGROUND_COLOR = 19
  /** ToggleGroup separation between toggles */
  export const GROUP_PADDING = 16
  /** Slider size of internal bar */
  export const SLIDER_WIDTH = 16
  /** Slider/SliderBar internal bar padding */
  export const SLIDER_PADDING = 17
  /** ProgressBar internal padding */
  export const PROGRESS_PADDING = 16
  /**  */
  export const ARROWS_SIZE = 16
  /**  */
  export const ARROWS_VISIBLE = 17
  /** (SLIDERBAR, SLIDER_PADDING) */
  export const SCROLL_SLIDER_PADDING = 18
  /**  */
  export const SCROLL_SLIDER_SIZE = 19
  /**  */
  export const SCROLL_PADDING = 20
  /**  */
  export const SCROLL_SPEED = 21
  /** CheckBox internal check padding */
  export const CHECK_PADDING = 16
  /** ComboBox right button width */
  export const COMBO_BUTTON_WIDTH = 16
  /** ComboBox button separation */
  export const COMBO_BUTTON_SPACING = 17
  /** DropdownBox arrow separation from border and items */
  export const ARROW_PADDING = 16
  /** DropdownBox items separation */
  export const DROPDOWN_ITEMS_SPACING = 17
  /** TextBox/TextBoxMulti/ValueBox/Spinner inner text padding */
  export const TEXT_INNER_PADDING = 16
  /** TextBoxMulti lines separation */
  export const TEXT_LINES_SPACING = 17
  /** Spinner left/right buttons width */
  export const SPIN_BUTTON_WIDTH = 16
  /** Spinner buttons separation */
  export const SPIN_BUTTON_SPACING = 17
  /** ListView items height */
  export const LIST_ITEMS_HEIGHT = 16
  /** ListView items separation */
  export const LIST_ITEMS_SPACING = 17
  /** ListView scrollbar size (usually width) */
  export const SCROLLBAR_WIDTH = 18
  /** ListView scrollbar side (0-left, 1-right) */
  export const SCROLLBAR_SIDE = 19
  /**  */
  export const COLOR_SELECTOR_SIZE = 16
  /** ColorPicker right hue bar width */
  export const HUEBAR_WIDTH = 17
  /** ColorPicker right hue bar separation from panel */
  export const HUEBAR_PADDING = 18
  /** ColorPicker right hue bar selector height */
  export const HUEBAR_SELECTOR_HEIGHT = 19
  /** ColorPicker right hue bar selector overflow */
  export const HUEBAR_SELECTOR_OVERFLOW = 20
  /**  */
  export const ICON_NONE = 0
  /**  */
  export const ICON_FOLDER_FILE_OPEN = 1
  /**  */
  export const ICON_FILE_SAVE_CLASSIC = 2
  /**  */
  export const ICON_FOLDER_OPEN = 3
  /**  */
  export const ICON_FOLDER_SAVE = 4
  /**  */
  export const ICON_FILE_OPEN = 5
  /**  */
  export const ICON_FILE_SAVE = 6
  /**  */
  export const ICON_FILE_EXPORT = 7
  /**  */
  export const ICON_FILE_ADD = 8
  /**  */
  export const ICON_FILE_DELETE = 9
  /**  */
  export const ICON_FILETYPE_TEXT = 10
  /**  */
  export const ICON_FILETYPE_AUDIO = 11
  /**  */
  export const ICON_FILETYPE_IMAGE = 12
  /**  */
  export const ICON_FILETYPE_PLAY = 13
  /**  */
  export const ICON_FILETYPE_VIDEO = 14
  /**  */
  export const ICON_FILETYPE_INFO = 15
  /**  */
  export const ICON_FILE_COPY = 16
  /**  */
  export const ICON_FILE_CUT = 17
  /**  */
  export const ICON_FILE_PASTE = 18
  /**  */
  export const ICON_CURSOR_HAND = 19
  /**  */
  export const ICON_CURSOR_POINTER = 20
  /**  */
  export const ICON_CURSOR_CLASSIC = 21
  /**  */
  export const ICON_PENCIL = 22
  /**  */
  export const ICON_PENCIL_BIG = 23
  /**  */
  export const ICON_BRUSH_CLASSIC = 24
  /**  */
  export const ICON_BRUSH_PAINTER = 25
  /**  */
  export const ICON_WATER_DROP = 26
  /**  */
  export const ICON_COLOR_PICKER = 27
  /**  */
  export const ICON_RUBBER = 28
  /**  */
  export const ICON_COLOR_BUCKET = 29
  /**  */
  export const ICON_TEXT_T = 30
  /**  */
  export const ICON_TEXT_A = 31
  /**  */
  export const ICON_SCALE = 32
  /**  */
  export const ICON_RESIZE = 33
  /**  */
  export const ICON_FILTER_POINT = 34
  /**  */
  export const ICON_FILTER_BILINEAR = 35
  /**  */
  export const ICON_CROP = 36
  /**  */
  export const ICON_CROP_ALPHA = 37
  /**  */
  export const ICON_SQUARE_TOGGLE = 38
  /**  */
  export const ICON_SYMMETRY = 39
  /**  */
  export const ICON_SYMMETRY_HORIZONTAL = 40
  /**  */
  export const ICON_SYMMETRY_VERTICAL = 41
  /**  */
  export const ICON_LENS = 42
  /**  */
  export const ICON_LENS_BIG = 43
  /**  */
  export const ICON_EYE_ON = 44
  /**  */
  export const ICON_EYE_OFF = 45
  /**  */
  export const ICON_FILTER_TOP = 46
  /**  */
  export const ICON_FILTER = 47
  /**  */
  export const ICON_TARGET_POINT = 48
  /**  */
  export const ICON_TARGET_SMALL = 49
  /**  */
  export const ICON_TARGET_BIG = 50
  /**  */
  export const ICON_TARGET_MOVE = 51
  /**  */
  export const ICON_CURSOR_MOVE = 52
  /**  */
  export const ICON_CURSOR_SCALE = 53
  /**  */
  export const ICON_CURSOR_SCALE_RIGHT = 54
  /**  */
  export const ICON_CURSOR_SCALE_LEFT = 55
  /**  */
  export const ICON_UNDO = 56
  /**  */
  export const ICON_REDO = 57
  /**  */
  export const ICON_REREDO = 58
  /**  */
  export const ICON_MUTATE = 59
  /**  */
  export const ICON_ROTATE = 60
  /**  */
  export const ICON_REPEAT = 61
  /**  */
  export const ICON_SHUFFLE = 62
  /**  */
  export const ICON_EMPTYBOX = 63
  /**  */
  export const ICON_TARGET = 64
  /**  */
  export const ICON_TARGET_SMALL_FILL = 65
  /**  */
  export const ICON_TARGET_BIG_FILL = 66
  /**  */
  export const ICON_TARGET_MOVE_FILL = 67
  /**  */
  export const ICON_CURSOR_MOVE_FILL = 68
  /**  */
  export const ICON_CURSOR_SCALE_FILL = 69
  /**  */
  export const ICON_CURSOR_SCALE_RIGHT_FILL = 70
  /**  */
  export const ICON_CURSOR_SCALE_LEFT_FILL = 71
  /**  */
  export const ICON_UNDO_FILL = 72
  /**  */
  export const ICON_REDO_FILL = 73
  /**  */
  export const ICON_REREDO_FILL = 74
  /**  */
  export const ICON_MUTATE_FILL = 75
  /**  */
  export const ICON_ROTATE_FILL = 76
  /**  */
  export const ICON_REPEAT_FILL = 77
  /**  */
  export const ICON_SHUFFLE_FILL = 78
  /**  */
  export const ICON_EMPTYBOX_SMALL = 79
  /**  */
  export const ICON_BOX = 80
  /**  */
  export const ICON_BOX_TOP = 81
  /**  */
  export const ICON_BOX_TOP_RIGHT = 82
  /**  */
  export const ICON_BOX_RIGHT = 83
  /**  */
  export const ICON_BOX_BOTTOM_RIGHT = 84
  /**  */
  export const ICON_BOX_BOTTOM = 85
  /**  */
  export const ICON_BOX_BOTTOM_LEFT = 86
  /**  */
  export const ICON_BOX_LEFT = 87
  /**  */
  export const ICON_BOX_TOP_LEFT = 88
  /**  */
  export const ICON_BOX_CENTER = 89
  /**  */
  export const ICON_BOX_CIRCLE_MASK = 90
  /**  */
  export const ICON_POT = 91
  /**  */
  export const ICON_ALPHA_MULTIPLY = 92
  /**  */
  export const ICON_ALPHA_CLEAR = 93
  /**  */
  export const ICON_DITHERING = 94
  /**  */
  export const ICON_MIPMAPS = 95
  /**  */
  export const ICON_BOX_GRID = 96
  /**  */
  export const ICON_GRID = 97
  /**  */
  export const ICON_BOX_CORNERS_SMALL = 98
  /**  */
  export const ICON_BOX_CORNERS_BIG = 99
  /**  */
  export const ICON_FOUR_BOXES = 100
  /**  */
  export const ICON_GRID_FILL = 101
  /**  */
  export const ICON_BOX_MULTISIZE = 102
  /**  */
  export const ICON_ZOOM_SMALL = 103
  /**  */
  export const ICON_ZOOM_MEDIUM = 104
  /**  */
  export const ICON_ZOOM_BIG = 105
  /**  */
  export const ICON_ZOOM_ALL = 106
  /**  */
  export const ICON_ZOOM_CENTER = 107
  /**  */
  export const ICON_BOX_DOTS_SMALL = 108
  /**  */
  export const ICON_BOX_DOTS_BIG = 109
  /**  */
  export const ICON_BOX_CONCENTRIC = 110
  /**  */
  export const ICON_BOX_GRID_BIG = 111
  /**  */
  export const ICON_OK_TICK = 112
  /**  */
  export const ICON_CROSS = 113
  /**  */
  export const ICON_ARROW_LEFT = 114
  /**  */
  export const ICON_ARROW_RIGHT = 115
  /**  */
  export const ICON_ARROW_DOWN = 116
  /**  */
  export const ICON_ARROW_UP = 117
  /**  */
  export const ICON_ARROW_LEFT_FILL = 118
  /**  */
  export const ICON_ARROW_RIGHT_FILL = 119
  /**  */
  export const ICON_ARROW_DOWN_FILL = 120
  /**  */
  export const ICON_ARROW_UP_FILL = 121
  /**  */
  export const ICON_AUDIO = 122
  /**  */
  export const ICON_FX = 123
  /**  */
  export const ICON_WAVE = 124
  /**  */
  export const ICON_WAVE_SINUS = 125
  /**  */
  export const ICON_WAVE_SQUARE = 126
  /**  */
  export const ICON_WAVE_TRIANGULAR = 127
  /**  */
  export const ICON_CROSS_SMALL = 128
  /**  */
  export const ICON_PLAYER_PREVIOUS = 129
  /**  */
  export const ICON_PLAYER_PLAY_BACK = 130
  /**  */
  export const ICON_PLAYER_PLAY = 131
  /**  */
  export const ICON_PLAYER_PAUSE = 132
  /**  */
  export const ICON_PLAYER_STOP = 133
  /**  */
  export const ICON_PLAYER_NEXT = 134
  /**  */
  export const ICON_PLAYER_RECORD = 135
  /**  */
  export const ICON_MAGNET = 136
  /**  */
  export const ICON_LOCK_CLOSE = 137
  /**  */
  export const ICON_LOCK_OPEN = 138
  /**  */
  export const ICON_CLOCK = 139
  /**  */
  export const ICON_TOOLS = 140
  /**  */
  export const ICON_GEAR = 141
  /**  */
  export const ICON_GEAR_BIG = 142
  /**  */
  export const ICON_BIN = 143
  /**  */
  export const ICON_HAND_POINTER = 144
  /**  */
  export const ICON_LASER = 145
  /**  */
  export const ICON_COIN = 146
  /**  */
  export const ICON_EXPLOSION = 147
  /**  */
  export const ICON_1UP = 148
  /**  */
  export const ICON_PLAYER = 149
  /**  */
  export const ICON_PLAYER_JUMP = 150
  /**  */
  export const ICON_KEY = 151
  /**  */
  export const ICON_DEMON = 152
  /**  */
  export const ICON_TEXT_POPUP = 153
  /**  */
  export const ICON_GEAR_EX = 154
  /**  */
  export const ICON_CRACK = 155
  /**  */
  export const ICON_CRACK_POINTS = 156
  /**  */
  export const ICON_STAR = 157
  /**  */
  export const ICON_DOOR = 158
  /**  */
  export const ICON_EXIT = 159
  /**  */
  export const ICON_MODE_2D = 160
  /**  */
  export const ICON_MODE_3D = 161
  /**  */
  export const ICON_CUBE = 162
  /**  */
  export const ICON_CUBE_FACE_TOP = 163
  /**  */
  export const ICON_CUBE_FACE_LEFT = 164
  /**  */
  export const ICON_CUBE_FACE_FRONT = 165
  /**  */
  export const ICON_CUBE_FACE_BOTTOM = 166
  /**  */
  export const ICON_CUBE_FACE_RIGHT = 167
  /**  */
  export const ICON_CUBE_FACE_BACK = 168
  /**  */
  export const ICON_CAMERA = 169
  /**  */
  export const ICON_SPECIAL = 170
  /**  */
  export const ICON_LINK_NET = 171
  /**  */
  export const ICON_LINK_BOXES = 172
  /**  */
  export const ICON_LINK_MULTI = 173
  /**  */
  export const ICON_LINK = 174
  /**  */
  export const ICON_LINK_BROKE = 175
  /**  */
  export const ICON_TEXT_NOTES = 176
  /**  */
  export const ICON_NOTEBOOK = 177
  /**  */
  export const ICON_SUITCASE = 178
  /**  */
  export const ICON_SUITCASE_ZIP = 179
  /**  */
  export const ICON_MAILBOX = 180
  /**  */
  export const ICON_MONITOR = 181
  /**  */
  export const ICON_PRINTER = 182
  /**  */
  export const ICON_PHOTO_CAMERA = 183
  /**  */
  export const ICON_PHOTO_CAMERA_FLASH = 184
  /**  */
  export const ICON_HOUSE = 185
  /**  */
  export const ICON_HEART = 186
  /**  */
  export const ICON_CORNER = 187
  /**  */
  export const ICON_VERTICAL_BARS = 188
  /**  */
  export const ICON_VERTICAL_BARS_FILL = 189
  /**  */
  export const ICON_LIFE_BARS = 190
  /**  */
  export const ICON_INFO = 191
  /**  */
  export const ICON_CROSSLINE = 192
  /**  */
  export const ICON_HELP = 193
  /**  */
  export const ICON_FILETYPE_ALPHA = 194
  /**  */
  export const ICON_FILETYPE_HOME = 195
  /**  */
  export const ICON_LAYERS_VISIBLE = 196
  /**  */
  export const ICON_LAYERS = 197
  /**  */
  export const ICON_WINDOW = 198
  /**  */
  export const ICON_HIDPI = 199
  /**  */
  export const ICON_FILETYPE_BINARY = 200
  /**  */
  export const ICON_HEX = 201
  /**  */
  export const ICON_SHIELD = 202
  /**  */
  export const ICON_FILE_NEW = 203
  /**  */
  export const ICON_FOLDER_ADD = 204
  /**  */
  export const ICON_ALARM = 205
  /**  */
  export const ICON_CPU = 206
  /**  */
  export const ICON_ROM = 207
  /**  */
  export const ICON_STEP_OVER = 208
  /**  */
  export const ICON_STEP_INTO = 209
  /**  */
  export const ICON_STEP_OUT = 210
  /**  */
  export const ICON_RESTART = 211
  /**  */
  export const ICON_BREAKPOINT_ON = 212
  /**  */
  export const ICON_BREAKPOINT_OFF = 213
  /**  */
  export const ICON_BURGER_MENU = 214
  /**  */
  export const ICON_CASE_SENSITIVE = 215
  /**  */
  export const ICON_REG_EXP = 216
  /**  */
  export const ICON_FOLDER = 217
  /**  */
  export const ICON_FILE = 218
  /**  */
  export const ICON_219 = 219
  /**  */
  export const ICON_220 = 220
  /**  */
  export const ICON_221 = 221
  /**  */
  export const ICON_222 = 222
  /**  */
  export const ICON_223 = 223
  /**  */
  export const ICON_224 = 224
  /**  */
  export const ICON_225 = 225
  /**  */
  export const ICON_226 = 226
  /**  */
  export const ICON_227 = 227
  /**  */
  export const ICON_228 = 228
  /**  */
  export const ICON_229 = 229
  /**  */
  export const ICON_230 = 230
  /**  */
  export const ICON_231 = 231
  /**  */
  export const ICON_232 = 232
  /**  */
  export const ICON_233 = 233
  /**  */
  export const ICON_234 = 234
  /**  */
  export const ICON_235 = 235
  /**  */
  export const ICON_236 = 236
  /**  */
  export const ICON_237 = 237
  /**  */
  export const ICON_238 = 238
  /**  */
  export const ICON_239 = 239
  /**  */
  export const ICON_240 = 240
  /**  */
  export const ICON_241 = 241
  /**  */
  export const ICON_242 = 242
  /**  */
  export const ICON_243 = 243
  /**  */
  export const ICON_244 = 244
  /**  */
  export const ICON_245 = 245
  /**  */
  export const ICON_246 = 246
  /**  */
  export const ICON_247 = 247
  /**  */
  export const ICON_248 = 248
  /**  */
  export const ICON_249 = 249
  /**  */
  export const ICON_250 = 250
  /**  */
  export const ICON_251 = 251
  /**  */
  export const ICON_252 = 252
  /**  */
  export const ICON_253 = 253
  /**  */
  export const ICON_254 = 254
  /**  */
  export const ICON_255 = 255
  /** OpenGL 1.1 */
  export const RL_OPENGL_11 = 1
  /** OpenGL 2.1 (GLSL 120) */
  export const RL_OPENGL_21 = 2
  /** OpenGL 3.3 (GLSL 330) */
  export const RL_OPENGL_33 = 3
  /** OpenGL 4.3 (using GLSL 330) */
  export const RL_OPENGL_43 = 4
  /** OpenGL ES 2.0 (GLSL 100) */
  export const RL_OPENGL_ES_20 = 5
  /** Display all logs */
  export const RL_LOG_ALL = 0
  /** Trace logging, intended for internal use only */
  export const RL_LOG_TRACE = 1
  /** Debug logging, used for internal debugging, it should be disabled on release builds */
  export const RL_LOG_DEBUG = 2
  /** Info logging, used for program execution info */
  export const RL_LOG_INFO = 3
  /** Warning logging, used on recoverable failures */
  export const RL_LOG_WARNING = 4
  /** Error logging, used on unrecoverable failures */
  export const RL_LOG_ERROR = 5
  /** Fatal logging, used to abort program: exit(EXIT_FAILURE) */
  export const RL_LOG_FATAL = 6
  /** Disable logging */
  export const RL_LOG_NONE = 7
  /** 8 bit per pixel (no alpha) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_GRAYSCALE = 1
  /** 8*2 bpp (2 channels) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_GRAY_ALPHA = 2
  /** 16 bpp */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R5G6B5 = 3
  /** 24 bpp */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R8G8B8 = 4
  /** 16 bpp (1 bit alpha) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R5G5B5A1 = 5
  /** 16 bpp (4 bit alpha) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R4G4B4A4 = 6
  /** 32 bpp */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R8G8B8A8 = 7
  /** 32 bpp (1 channel - float) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R32 = 8
  /** 32*3 bpp (3 channels - float) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R32G32B32 = 9
  /** 32*4 bpp (4 channels - float) */
  export const RL_PIXELFORMAT_UNCOMPRESSED_R32G32B32A32 = 10
  /** 4 bpp (no alpha) */
  export const RL_PIXELFORMAT_COMPRESSED_DXT1_RGB = 11
  /** 4 bpp (1 bit alpha) */
  export const RL_PIXELFORMAT_COMPRESSED_DXT1_RGBA = 12
  /** 8 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_DXT3_RGBA = 13
  /** 8 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_DXT5_RGBA = 14
  /** 4 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_ETC1_RGB = 15
  /** 4 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_ETC2_RGB = 16
  /** 8 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_ETC2_EAC_RGBA = 17
  /** 4 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_PVRT_RGB = 18
  /** 4 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_PVRT_RGBA = 19
  /** 8 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_ASTC_4x4_RGBA = 20
  /** 2 bpp */
  export const RL_PIXELFORMAT_COMPRESSED_ASTC_8x8_RGBA = 21
  /** No filter, just pixel approximation */
  export const RL_TEXTURE_FILTER_POINT = 0
  /** Linear filtering */
  export const RL_TEXTURE_FILTER_BILINEAR = 1
  /** Trilinear filtering (linear with mipmaps) */
  export const RL_TEXTURE_FILTER_TRILINEAR = 2
  /** Anisotropic filtering 4x */
  export const RL_TEXTURE_FILTER_ANISOTROPIC_4X = 3
  /** Anisotropic filtering 8x */
  export const RL_TEXTURE_FILTER_ANISOTROPIC_8X = 4
  /** Anisotropic filtering 16x */
  export const RL_TEXTURE_FILTER_ANISOTROPIC_16X = 5
  /** Blend textures considering alpha (default) */
  export const RL_BLEND_ALPHA = 0
  /** Blend textures adding colors */
  export const RL_BLEND_ADDITIVE = 1
  /** Blend textures multiplying colors */
  export const RL_BLEND_MULTIPLIED = 2
  /** Blend textures adding colors (alternative) */
  export const RL_BLEND_ADD_COLORS = 3
  /** Blend textures subtracting colors (alternative) */
  export const RL_BLEND_SUBTRACT_COLORS = 4
  /** Blend premultiplied textures considering alpha */
  export const RL_BLEND_ALPHA_PREMULTIPLY = 5
  /** Blend textures using custom src/dst factors (use rlSetBlendFactors()) */
  export const RL_BLEND_CUSTOM = 6
  /** Blend textures using custom src/dst factors (use rlSetBlendFactorsSeparate()) */
  export const RL_BLEND_CUSTOM_SEPARATE = 7
  /** Shader location: vertex attribute: position */
  export const RL_SHADER_LOC_VERTEX_POSITION = 0
  /** Shader location: vertex attribute: texcoord01 */
  export const RL_SHADER_LOC_VERTEX_TEXCOORD01 = 1
  /** Shader location: vertex attribute: texcoord02 */
  export const RL_SHADER_LOC_VERTEX_TEXCOORD02 = 2
  /** Shader location: vertex attribute: normal */
  export const RL_SHADER_LOC_VERTEX_NORMAL = 3
  /** Shader location: vertex attribute: tangent */
  export const RL_SHADER_LOC_VERTEX_TANGENT = 4
  /** Shader location: vertex attribute: color */
  export const RL_SHADER_LOC_VERTEX_COLOR = 5
  /** Shader location: matrix uniform: model-view-projection */
  export const RL_SHADER_LOC_MATRIX_MVP = 6
  /** Shader location: matrix uniform: view (camera transform) */
  export const RL_SHADER_LOC_MATRIX_VIEW = 7
  /** Shader location: matrix uniform: projection */
  export const RL_SHADER_LOC_MATRIX_PROJECTION = 8
  /** Shader location: matrix uniform: model (transform) */
  export const RL_SHADER_LOC_MATRIX_MODEL = 9
  /** Shader location: matrix uniform: normal */
  export const RL_SHADER_LOC_MATRIX_NORMAL = 10
  /** Shader location: vector uniform: view */
  export const RL_SHADER_LOC_VECTOR_VIEW = 11
  /** Shader location: vector uniform: diffuse color */
  export const RL_SHADER_LOC_COLOR_DIFFUSE = 12
  /** Shader location: vector uniform: specular color */
  export const RL_SHADER_LOC_COLOR_SPECULAR = 13
  /** Shader location: vector uniform: ambient color */
  export const RL_SHADER_LOC_COLOR_AMBIENT = 14
  /** Shader location: sampler2d texture: albedo (same as: RL_SHADER_LOC_MAP_DIFFUSE) */
  export const RL_SHADER_LOC_MAP_ALBEDO = 15
  /** Shader location: sampler2d texture: metalness (same as: RL_SHADER_LOC_MAP_SPECULAR) */
  export const RL_SHADER_LOC_MAP_METALNESS = 16
  /** Shader location: sampler2d texture: normal */
  export const RL_SHADER_LOC_MAP_NORMAL = 17
  /** Shader location: sampler2d texture: roughness */
  export const RL_SHADER_LOC_MAP_ROUGHNESS = 18
  /** Shader location: sampler2d texture: occlusion */
  export const RL_SHADER_LOC_MAP_OCCLUSION = 19
  /** Shader location: sampler2d texture: emission */
  export const RL_SHADER_LOC_MAP_EMISSION = 20
  /** Shader location: sampler2d texture: height */
  export const RL_SHADER_LOC_MAP_HEIGHT = 21
  /** Shader location: samplerCube texture: cubemap */
  export const RL_SHADER_LOC_MAP_CUBEMAP = 22
  /** Shader location: samplerCube texture: irradiance */
  export const RL_SHADER_LOC_MAP_IRRADIANCE = 23
  /** Shader location: samplerCube texture: prefilter */
  export const RL_SHADER_LOC_MAP_PREFILTER = 24
  /** Shader location: sampler2d texture: brdf */
  export const RL_SHADER_LOC_MAP_BRDF = 25
  /** Shader uniform type: float */
  export const RL_SHADER_UNIFORM_FLOAT = 0
  /** Shader uniform type: vec2 (2 float) */
  export const RL_SHADER_UNIFORM_VEC2 = 1
  /** Shader uniform type: vec3 (3 float) */
  export const RL_SHADER_UNIFORM_VEC3 = 2
  /** Shader uniform type: vec4 (4 float) */
  export const RL_SHADER_UNIFORM_VEC4 = 3
  /** Shader uniform type: int */
  export const RL_SHADER_UNIFORM_INT = 4
  /** Shader uniform type: ivec2 (2 int) */
  export const RL_SHADER_UNIFORM_IVEC2 = 5
  /** Shader uniform type: ivec3 (3 int) */
  export const RL_SHADER_UNIFORM_IVEC3 = 6
  /** Shader uniform type: ivec4 (4 int) */
  export const RL_SHADER_UNIFORM_IVEC4 = 7
  /** Shader uniform type: sampler2d */
  export const RL_SHADER_UNIFORM_SAMPLER2D = 8
  /** Shader attribute type: float */
  export const RL_SHADER_ATTRIB_FLOAT = 0
  /** Shader attribute type: vec2 (2 float) */
  export const RL_SHADER_ATTRIB_VEC2 = 1
  /** Shader attribute type: vec3 (3 float) */
  export const RL_SHADER_ATTRIB_VEC3 = 2
  /** Shader attribute type: vec4 (4 float) */
  export const RL_SHADER_ATTRIB_VEC4 = 3
  /** Framebuffer attachment type: color 0 */
  export const RL_ATTACHMENT_COLOR_CHANNEL0 = 0
  /** Framebuffer attachment type: color 1 */
  export const RL_ATTACHMENT_COLOR_CHANNEL1 = 1
  /** Framebuffer attachment type: color 2 */
  export const RL_ATTACHMENT_COLOR_CHANNEL2 = 2
  /** Framebuffer attachment type: color 3 */
  export const RL_ATTACHMENT_COLOR_CHANNEL3 = 3
  /** Framebuffer attachment type: color 4 */
  export const RL_ATTACHMENT_COLOR_CHANNEL4 = 4
  /** Framebuffer attachment type: color 5 */
  export const RL_ATTACHMENT_COLOR_CHANNEL5 = 5
  /** Framebuffer attachment type: color 6 */
  export const RL_ATTACHMENT_COLOR_CHANNEL6 = 6
  /** Framebuffer attachment type: color 7 */
  export const RL_ATTACHMENT_COLOR_CHANNEL7 = 7
  /** Framebuffer attachment type: depth */
  export const RL_ATTACHMENT_DEPTH = 100
  /** Framebuffer attachment type: stencil */
  export const RL_ATTACHMENT_STENCIL = 200
  /** Framebuffer texture attachment type: cubemap, +X side */
  export const RL_ATTACHMENT_CUBEMAP_POSITIVE_X = 0
  /** Framebuffer texture attachment type: cubemap, -X side */
  export const RL_ATTACHMENT_CUBEMAP_NEGATIVE_X = 1
  /** Framebuffer texture attachment type: cubemap, +Y side */
  export const RL_ATTACHMENT_CUBEMAP_POSITIVE_Y = 2
  /** Framebuffer texture attachment type: cubemap, -Y side */
  export const RL_ATTACHMENT_CUBEMAP_NEGATIVE_Y = 3
  /** Framebuffer texture attachment type: cubemap, +Z side */
  export const RL_ATTACHMENT_CUBEMAP_POSITIVE_Z = 4
  /** Framebuffer texture attachment type: cubemap, -Z side */
  export const RL_ATTACHMENT_CUBEMAP_NEGATIVE_Z = 5
  /** Framebuffer texture attachment type: texture2d */
  export const RL_ATTACHMENT_TEXTURE2D = 100
  /** Framebuffer texture attachment type: renderbuffer */
  export const RL_ATTACHMENT_RENDERBUFFER = 200
  /**  */
  export const RL_CULL_FACE_FRONT = 0
  /**  */
  export const RL_CULL_FACE_BACK = 1
  /**  */
  export const RL_DEFAULT_BATCH_BUFFER_ELEMENTS = 8192
  /** Default number of batch buffers (multi-buffering) */
  export const RL_DEFAULT_BATCH_BUFFERS = 1
  /** Default number of batch draw calls (by state changes: mode, texture) */
  export const RL_DEFAULT_BATCH_DRAWCALLS = 256
  /** Maximum number of textures units that can be activated on batch drawing (SetShaderValueTexture()) */
  export const RL_DEFAULT_BATCH_MAX_TEXTURE_UNITS = 4
  /** Maximum size of Matrix stack */
  export const RL_MAX_MATRIX_STACK_SIZE = 32
  /** Maximum number of shader locations supported */
  export const RL_MAX_SHADER_LOCATIONS = 32
  /** GL_TEXTURE_WRAP_S */
  export const RL_TEXTURE_WRAP_S = 10242
  /** GL_TEXTURE_WRAP_T */
  export const RL_TEXTURE_WRAP_T = 10243
  /** GL_TEXTURE_MAG_FILTER */
  export const RL_TEXTURE_MAG_FILTER = 10240
  /** GL_TEXTURE_MIN_FILTER */
  export const RL_TEXTURE_MIN_FILTER = 10241
  /** GL_NEAREST */
  export const RL_TEXTURE_FILTER_NEAREST = 9728
  /** GL_LINEAR */
  export const RL_TEXTURE_FILTER_LINEAR = 9729
  /** GL_NEAREST_MIPMAP_NEAREST */
  export const RL_TEXTURE_FILTER_MIP_NEAREST = 9984
  /** GL_NEAREST_MIPMAP_LINEAR */
  export const RL_TEXTURE_FILTER_NEAREST_MIP_LINEAR = 9986
  /** GL_LINEAR_MIPMAP_NEAREST */
  export const RL_TEXTURE_FILTER_LINEAR_MIP_NEAREST = 9985
  /** GL_LINEAR_MIPMAP_LINEAR */
  export const RL_TEXTURE_FILTER_MIP_LINEAR = 9987
  /** Anisotropic filter (custom identifier) */
  export const RL_TEXTURE_FILTER_ANISOTROPIC = 12288
  /** Texture mipmap bias, percentage ratio (custom identifier) */
  export const RL_TEXTURE_MIPMAP_BIAS_RATIO = 16384
  /** GL_REPEAT */
  export const RL_TEXTURE_WRAP_REPEAT = 10497
  /** GL_CLAMP_TO_EDGE */
  export const RL_TEXTURE_WRAP_CLAMP = 33071
  /** GL_MIRRORED_REPEAT */
  export const RL_TEXTURE_WRAP_MIRROR_REPEAT = 33648
  /** GL_MIRROR_CLAMP_EXT */
  export const RL_TEXTURE_WRAP_MIRROR_CLAMP = 34626
  /** GL_MODELVIEW */
  export const RL_MODELVIEW = 5888
  /** GL_PROJECTION */
  export const RL_PROJECTION = 5889
  /** GL_TEXTURE */
  export const RL_TEXTURE = 5890
  /** GL_LINES */
  export const RL_LINES = 1
  /** GL_TRIANGLES */
  export const RL_TRIANGLES = 4
  /** GL_QUADS */
  export const RL_QUADS = 7
  /** GL_UNSIGNED_BYTE */
  export const RL_UNSIGNED_BYTE = 5121
  /** GL_FLOAT */
  export const RL_FLOAT = 5126
  /** GL_STREAM_DRAW */
  export const RL_STREAM_DRAW = 35040
  /** GL_STREAM_READ */
  export const RL_STREAM_READ = 35041
  /** GL_STREAM_COPY */
  export const RL_STREAM_COPY = 35042
  /** GL_STATIC_DRAW */
  export const RL_STATIC_DRAW = 35044
  /** GL_STATIC_READ */
  export const RL_STATIC_READ = 35045
  /** GL_STATIC_COPY */
  export const RL_STATIC_COPY = 35046
  /** GL_DYNAMIC_DRAW */
  export const RL_DYNAMIC_DRAW = 35048
  /** GL_DYNAMIC_READ */
  export const RL_DYNAMIC_READ = 35049
  /** GL_DYNAMIC_COPY */
  export const RL_DYNAMIC_COPY = 35050
  /** GL_FRAGMENT_SHADER */
  export const RL_FRAGMENT_SHADER = 35632
  /** GL_VERTEX_SHADER */
  export const RL_VERTEX_SHADER = 35633
  /** GL_COMPUTE_SHADER */
  export const RL_COMPUTE_SHADER = 37305
  /** GL_ZERO */
  export const RL_ZERO = 0
  /** GL_ONE */
  export const RL_ONE = 1
  /** GL_SRC_COLOR */
  export const RL_SRC_COLOR = 768
  /** GL_ONE_MINUS_SRC_COLOR */
  export const RL_ONE_MINUS_SRC_COLOR = 769
  /** GL_SRC_ALPHA */
  export const RL_SRC_ALPHA = 770
  /** GL_ONE_MINUS_SRC_ALPHA */
  export const RL_ONE_MINUS_SRC_ALPHA = 771
  /** GL_DST_ALPHA */
  export const RL_DST_ALPHA = 772
  /** GL_ONE_MINUS_DST_ALPHA */
  export const RL_ONE_MINUS_DST_ALPHA = 773
  /** GL_DST_COLOR */
  export const RL_DST_COLOR = 774
  /** GL_ONE_MINUS_DST_COLOR */
  export const RL_ONE_MINUS_DST_COLOR = 775
  /** GL_SRC_ALPHA_SATURATE */
  export const RL_SRC_ALPHA_SATURATE = 776
  /** GL_CONSTANT_COLOR */
  export const RL_CONSTANT_COLOR = 32769
  /** GL_ONE_MINUS_CONSTANT_COLOR */
  export const RL_ONE_MINUS_CONSTANT_COLOR = 32770
  /** GL_CONSTANT_ALPHA */
  export const RL_CONSTANT_ALPHA = 32771
  /** GL_ONE_MINUS_CONSTANT_ALPHA */
  export const RL_ONE_MINUS_CONSTANT_ALPHA = 32772
  /** GL_FUNC_ADD */
  export const RL_FUNC_ADD = 32774
  /** GL_MIN */
  export const RL_MIN = 32775
  /** GL_MAX */
  export const RL_MAX = 32776
  /** GL_FUNC_SUBTRACT */
  export const RL_FUNC_SUBTRACT = 32778
  /** GL_FUNC_REVERSE_SUBTRACT */
  export const RL_FUNC_REVERSE_SUBTRACT = 32779
  /** GL_BLEND_EQUATION */
  export const RL_BLEND_EQUATION = 32777
  /** GL_BLEND_EQUATION_RGB   // (Same as BLEND_EQUATION) */
  export const RL_BLEND_EQUATION_RGB = 32777
  /** GL_BLEND_EQUATION_ALPHA */
  export const RL_BLEND_EQUATION_ALPHA = 34877
  /** GL_BLEND_DST_RGB */
  export const RL_BLEND_DST_RGB = 32968
  /** GL_BLEND_SRC_RGB */
  export const RL_BLEND_SRC_RGB = 32969
  /** GL_BLEND_DST_ALPHA */
  export const RL_BLEND_DST_ALPHA = 32970
  /** GL_BLEND_SRC_ALPHA */
  export const RL_BLEND_SRC_ALPHA = 32971
  /** GL_BLEND_COLOR */
  export const RL_BLEND_COLOR = 32773

  export const LIGHTGRAY = { r: 200, g: 200, b: 200, a: 255 }
  export const GRAY = { r: 130, g: 130, b: 130, a: 255 }
  export const DARKGRAY = { r: 80, g: 80, b: 80, a: 255 }
  export const YELLOW = { r: 253, g: 249, b: 0, a: 255 }
  export const GOLD = { r: 255, g: 203, b: 0, a: 255 }
  export const ORANGE = { r: 255, g: 161, b: 0, a: 255 }
  export const PINK = { r: 255, g: 109, b: 194, a: 255 }
  export const RED = { r: 230, g: 41, b: 55, a: 255 }
  export const MAROON = { r: 190, g: 33, b: 55, a: 255 }
  export const GREEN = { r: 0, g: 228, b: 48, a: 255 }
  export const LIME = { r: 0, g: 158, b: 47, a: 255 }
  export const DARKGREEN = { r: 0, g: 117, b: 44, a: 255 }
  export const SKYBLUE = { r: 102, g: 191, b: 255, a: 255 }
  export const BLUE = { r: 0, g: 121, b: 241, a: 255 }
  export const DARKBLUE = { r: 0, g: 82, b: 172, a: 255 }
  export const PURPLE = { r: 200, g: 122, b: 255, a: 255 }
  export const VIOLET = { r: 135, g: 60, b: 190, a: 255 }
  export const DARKPURPLE = { r: 112, g: 31, b: 126, a: 255 }
  export const BEIGE = { r: 211, g: 176, b: 131, a: 255 }
  export const BROWN = { r: 127, g: 106, b: 79, a: 255 }
  export const DARKBROWN = { r: 76, g: 63, b: 47, a: 255 }
  export const WHITE = { r: 255, g: 255, b: 255, a: 255 }
  export const BLACK = { r: 0, g: 0, b: 0, a: 255 }
  export const BLANK = { r: 0, g: 0, b: 0, a: 0 }
  export const MAGENTA = { r: 255, g: 0, b: 255, a: 255 }
  export const RAYWHITE = { r: 245, g: 245, b: 245, a: 255 }