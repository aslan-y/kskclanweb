<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KsK Clan Website - Technische Dokumentation</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
            color: #24292e;
        }
        
        h1, h2, h3 { 
            border-bottom: 1px solid #eaecef;
            padding-bottom: 0.3em;
        }
        
        .tech-stack {
            background: #f6f8fa;
            padding: 1rem;
            border-radius: 6px;
        }
        
        code {
            background: #f6f8fa;
            padding: 0.2em 0.4em;
            border-radius: 3px;
            font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
        }
        
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 1rem 0;
        }
        
        th, td {
            border: 1px solid #dfe2e5;
            padding: 8px;
            text-align: left;
        }
        
        th {
            background: #f6f8fa;
        }
    </style>
</head>
<body>
    <h1>KsK Clan Website - Technische Dokumentation</h1>
    
    <h2>🔧 Technologie-Stack</h2>
    <div class="tech-stack">
        <ul>
            <li>HTML5 für die Seitenstruktur</li>
            <li>CSS3 für das responsive Design</li>
            <li>JavaScript für interaktive Elemente</li>
            <li>Content Security Policy (CSP) für erhöhte Sicherheit</li>
        </ul>
    </div>

    <h2>📁 Projektstruktur</h2>
    <table>
        <tr>
            <th>Verzeichnis/Datei</th>
            <th>Beschreibung</th>
        </tr>
        <tr>
            <td><code>index.html</code></td>
            <td>Hauptseite mit Clan-Übersicht</td>
        </tr>
        <tr>
            <td><code>teams.html</code></td>
            <td>Team-Roster und Erfolge</td>
        </tr>
        <tr>
            <td><code>turniere.html</code></td>
            <td>Turnier-Informationen und Events</td>
        </tr>
        <tr>
            <td><code>discord.html</code></td>
            <td>Discord-Integration und Channel-Übersicht</td>
        </tr>
        <tr>
            <td><code>css/style.css</code></td>
            <td>Globale Stylesheets</td>
        </tr>
        <tr>
            <td><code>js/script.js</code></td>
            <td>Interaktive Funktionen</td>
        </tr>
        <tr>
            <td><code>images/</code></td>
            <td>Bildmaterial und Assets</td>
        </tr>
    </table>

    <h2>🔒 Sicherheitsmerkmale</h2>
    <ul>
        <li>Implementierte Content Security Policy</li>
        <li>X-Content-Type-Options Header</li>
        <li>Sichere externe Ressourcen-Einbindung</li>
        <li>Optimierte Bildressourcen mit width/height Attributen</li>
    </ul>

    <h2>🌐 SEO-Optimierung</h2>
    <ul>
        <li>Implementierte Meta-Tags</li>
        <li>Open Graph Protocol Integration</li>
        <li>Optimierte <code>robots.txt</code></li>
        <li>Strukturierte XML-Sitemap</li>
        <li>Semantische HTML-Struktur</li>
    </ul>

    <h2>♿ Barrierefreiheit</h2>
    <ul>
        <li>ARIA-Labels für Navigation</li>
        <li>Alt-Texte für Bilder</li>
        <li>Semantische HTML5-Elemente</li>
        <li>Kontrastoptimierte Farbwahl</li>
    </ul>

    <h2>📱 Responsive Design</h2>
    <ul>
        <li>Mobile-First Ansatz</li>
        <li>Flexibles Grid-System</li>
        <li>Anpassungsfähige Bilder</li>
        <li>Optimierte Navigation für mobile Geräte</li>
    </ul>
</body>
</html>
