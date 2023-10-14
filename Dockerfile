FROM postgres
ENV POSTGRES_PASSWORD docker
ENV POSTGRES_DB luxonis_task_db
COPY luxonis_task_db.sql /docker-entrypoint-initdb.d/
