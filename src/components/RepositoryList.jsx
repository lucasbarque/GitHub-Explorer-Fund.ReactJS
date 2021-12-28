import { RepositoryItem } from "./RepoitoryItem";

const repository = {
  name: 'unform',
  description: 'forms em react',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositóriios</h1>
      
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />        
      </ul>
    </section>
  );
}