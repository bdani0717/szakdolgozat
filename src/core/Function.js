import r from "raylib";

export const { 
    // WINDOW
    CloseWindow,
    IsWindowFullscreen,
    IsWindowHidden,
    IsWindowMinimized,
    IsWindowMaximized,
    IsWindowFocused,
    IsWindowResized,
    ToggleFullscreen,
    MaximizeWindow,
    MinimizeWindow,
    RestoreWindow,
    SetWindowIcon,
    SetWindowIcons,
    SetWindowTitle,
    SetWindowPosition,
    SetWindowMonitor,
    SetWindowMinSize,
    SetWindowSize,
    SetWindowOpacity,
    GetScreenWidth,
    GetScreenHeight,
    GetRenderWidth,
    GetRenderHeight,
    GetMonitorCount,
    GetCurrentMonitor,
    GetMonitorWidth,
    GetMonitorHeight,
    GetMonitorPhysicalWidth,
    GetMonitorPhysicalHeight,
    GetMonitorRefreshRate,
    GetWindowPosition,
    GetWindowScaleDPI,

    // CURSOR
    ShowCursor,
    HideCursor,
    IsCursorHidden,
    EnableCursor,
    DisableCursor,
    IsCursorOnScreen,

    // DRAWING
    ClearBackground,

    // TIMING
    GetFPS,
    GetFrameTime,
    GetTime,

    // MISC
    GetRandomValue,
    SetRandomSeed,
    TakeScreenshot,
    OpenURL,

    // INPUT
    IsKeyPressed,
    IsKeyDown,
    IsKeyReleased,
    IsKeyUp,
    SetExitKey,
    GetKeyPressed,
    GetCharPressed,

    IsGamepadAvailable,
    GetGamepadName,
    IsGamepadButtonPressed,
    IsGamepadButtonDown,
    IsGamepadButtonReleased,
    IsGamepadButtonUp,
    GetGamepadButtonPressed,
    GetGamepadAxisCount,
    GetGamepadAxisMovement,

    IsMouseButtonPressed,
    IsMouseButtonDown,
    IsMouseButtonReleased,
    IsMouseButtonUp,
    GetMouseX,
    GetMouseY,
    GetMousePosition,
    GetMouseDelta,
    SetMousePosition,
    SetMouseOffset,
    SetMouseScale,
    GetMouseWheelMove,
    GetMouseWheelMoveV,
    SetMouseCursor,

    GetTouchX,
    GetTouchY,
    GetTouchPosition,
    GetTouchPointId,
    GetTouchPointCount,

    // SHAPES
    DrawPixel,
    DrawPixelV,
    
    DrawLine,
    DrawLineV,
    DrawLineEx,
    DrawLineBezier,
    DrawLineBezierQuad,
    DrawLineBezierCubic,
    DrawLineStrip,

    DrawCircle,
    DrawCircleSector,
    DrawCircleSectorLines,
    DrawCircleGradient,
    DrawCircleV,
    DrawCircleLines,

    DrawEllipse,
    DrawEllipseLines,

    DrawRing,
    DrawRingLines,

    DrawRectangle,
    DrawRectangleV,
    DrawRectangleRec,
    DrawRectanglePro,
    DrawRectangleGradientV,
    DrawRectangleGradientH,
    DrawRectangleGradientEx,
    DrawRectangleLines,
    DrawRectangleLinesEx,
    DrawRectangleRounded,
    DrawRectangleRoundedLines,

    DrawTriangle,
    DrawTriangleLines,
    DrawTriangleFan,
    DrawTriangleStrip,

    DrawPoly,
    DrawPolyLines,
    DrawPolyLinesEx,

    // TEXT
    DrawText,
    DrawTextEx,
    DrawTextPro,

    // TEXTURE
    DrawTexture,
    DrawTextureV,
    DrawTextureEx,
    DrawTextureRec,
    DrawTexturePro,
    DrawTextureNPatch,
} = r;