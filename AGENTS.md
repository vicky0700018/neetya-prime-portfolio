<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep NEETYA's demonstration content in a client-side React context persisted to localStorage; this intentionally avoids backend storage per the brief.
- Keep public pages as distinct TanStack Start leaf routes while sharing presentation components; this preserves direct links and page metadata within the existing app runtime.
