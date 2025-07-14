-- Create enums for issue status and priority
CREATE TYPE status AS ENUM ('backlog', 'todo', 'in_progress', 'done');
CREATE TYPE priority AS ENUM ('low', 'medium', 'high');

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create issues table
CREATE TABLE IF NOT EXISTS issues (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    status status DEFAULT 'backlog' NOT NULL,
    priority priority DEFAULT 'medium' NOT NULL,
    created_at TIMESTAMP DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
    user_id TEXT NOT NULL REFERENCES users(id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_issues_user_id ON issues(user_id);
CREATE INDEX IF NOT EXISTS idx_issues_status ON issues(status);
CREATE INDEX IF NOT EXISTS idx_issues_created_at ON issues(created_at);
