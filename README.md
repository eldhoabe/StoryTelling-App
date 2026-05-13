# BioGraph StoryTeller — Monorepo

```
biograph-code/
├── frontend/   # Expo (React Native + TypeScript + Expo Router)
└── backend/    # ASP.NET Core 8 Minimal API + EF Core + PostgreSQL
```

---

## Prerequisites

| Tool | Minimum version |
|---|---|
| Node.js | 18 |
| npm | 9 |
| .NET SDK | 8.0 |
| dotnet-ef (global) | 8.0 |

Install `dotnet-ef` once:

```bash
dotnet tool install --global dotnet-ef --version "8.0.*"
```

---

## Backend (ASP.NET Core)

### Local development (SQLite)

The `appsettings.Development.json` file is pre-configured to use a local SQLite
file (`biograph.db`). No database server required.

```bash
cd backend
dotnet run
```

The API will be available at `https://localhost:5001` (or `http://localhost:5000`).
On first run, EF Core automatically applies all pending migrations.

### Endpoints

| Method | Path | Description |
|---|---|---|
| GET | /todos | List all to-do items |
| GET | /todos/{id} | Get a single to-do item |
| POST | /todos | Create a to-do item |
| PUT | /todos/{id} | Update a to-do item |
| DELETE | /todos/{id} | Delete a to-do item |

### Adding a migration

```bash
cd backend
dotnet ef migrations add <MigrationName>
```

### Production (PostgreSQL)

Set the `DefaultConnection` in `appsettings.json` (or via an environment variable /
secrets manager):

```
Host=<host>;Database=biograph;Username=<user>;Password=<password>
```

When `ASPNETCORE_ENVIRONMENT` is not `Development`, the app uses
`Npgsql.EntityFrameworkCore.PostgreSQL` automatically.

---

## Frontend (Expo + React Native)

### Install dependencies

```bash
cd frontend
npm install
```

> If npm complains about cache permissions run:
> `sudo chown -R $(id -u):$(id -g) ~/.npm`

### Start the development server

```bash
cd frontend
npm start          # opens Expo Go QR code in the terminal
npm run ios        # launch iOS Simulator (requires macOS + Xcode)
npm run android    # launch Android Emulator
npm run web        # open in the browser
```

### Project structure

```
frontend/
└── app/
    ├── _layout.tsx          # Root layout (fonts, splash screen)
    ├── (tabs)/
    │   ├── _layout.tsx      # Tab bar definition
    │   ├── index.tsx        # Home tab
    │   └── two.tsx          # Second tab
    ├── modal.tsx            # Example modal route
    └── +not-found.tsx       # 404 fallback
```

Routes are file-system based via [Expo Router](https://expo.github.io/router).

---

## Running both together

Open two terminal windows:

```bash
# Terminal 1 — backend
cd backend && dotnet run

# Terminal 2 — frontend
cd frontend && npm start
```

The Expo dev server proxies nothing by default. Point your API calls in the app
to `http://localhost:5000` (or `https://localhost:5001` with a trusted cert).
For physical devices, replace `localhost` with your machine's local IP address.
