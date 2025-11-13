{ pkgs, lib, config, inputs, ... }: {
  # https://devenv.sh/packages/
  packages = with pkgs; [
    git
    cargo
    cargo-watch
    cargo-audit
    cargo-nextest
    cargo-outdated
    cargo-tauri
    curl
    git
    jq
    just
    rust-analyzer
    rustc
    rustup
    sccache
    vulkan-loader
    wayland
    libglvnd
    wlroots
    pkg-config
    gobject-introspection
    cargo
    cargo-tauri
    nodejs

    # Optional but helpful for broader GUI app compatibility
    libxkbcommon
    mesa # OpenGL support

    # Provide X11 *libs only* as fallback for apps that probe both
    xorg.libX11
    xorg.libXcursor
    xorg.libXrandr
    xorg.libXi

    at-spi2-atk
    atkmm
    cairo
    dbus
    gdk-pixbuf
    glib
    gobject-introspection
    gtk3
    harfbuzz
    librsvg
    libsoup_3
    nodejs_latest
    openssl
    pango
    pkg-config
    webkitgtk_4_1
  ];

  # https://devenv.sh/languages/
  languages.rust.enable = true;
  languages.javascript.enable = true;
  languages.typescript.enable = true;
  languages.javascript.corepack.enable = true;
  languages.javascript.pnpm.enable = true;

  # Type: one of “nixpkgs”, “stable”, “beta”, “nightly”
  languages.rust.channel = "nightly";

  # https://rust-lang.github.io/rustup/concepts/components.html
  languages.rust.components = [
    "rustc" # The Rust compiler and Rustdoc.
    "cargo" # Cargo is a package manager and build tool.
    "rustfmt" # Rustfmt is a tool for automatically formatting code.
    "rust-std" # This is the Rust standard library. There is a separate rust-std component for each target that rustc supports, such as rust-std-x86_64-pc-windows-msvc.
    "rust-docs" # This is a local copy of the Rust documentation. Use the rustup doc command to open the documentation in a web browser. Run rustup doc --help for more options.
    "rust-analyzer" # rust-analyzer is a language server that provides support for editors and IDEs.
    "clippy" # Clippy is a lint tool that provides extra checks for common mistakes and stylistic choices.
    "rust-src" # This is a local copy of the source code of the Rust standard library.
  ];

  # Extra flags to pass to the Rust compiler.
  # languages.rust.rustflags = "";

  env.RUSTC_WRAPPER = "${pkgs.sccache}/bin/sccache";
  # languages.rust.mold.enable = true;
  env = {
    LIBGL_ALWAYS_INDIRECT = "0";
    GDK_BACKEND = "wayland,x11";
    MOZ_ENABLE_WAYLAND = "1";
    WEBKIT_DISABLE_COMPOSITING_MODE = "0";
  };

  # https://devenv.sh/processes/
  # processes.cargo-watch.exec = "cargo-watch";
  processes.cargo-watch.exec = "cargo watch -x 'run'";

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  enterShell = ''
    echo "Welcome babe!"
    git --version
    rustc --version
    code .
    exec zsh
  '';
}
