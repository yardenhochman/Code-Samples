<StateProvider inject={[new UserState({ user: Cache.getItem("user") })]}>
  <app />;
</StateProvider>
